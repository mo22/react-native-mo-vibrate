#!/bin/bash
set -e

DIR="$2"
if ! [ -d $DIR/node_modules/react-native-mo-vibrate ]; then
  echo "$DIR/node_modules/react-native-mo-vibrate not there" 1>&2
  exit 1
fi

if [ "$1" == "from" ]; then
  cp -r $DIR/node_modules/react-native-mo-vibrate/ios/ReactNativeMoVibrate ./ios/
  cp -r $DIR/node_modules/react-native-mo-vibrate/{readme.md,src} .
  cp -r $DIR/node_modules/react-native-mo-vibrate/android/{src,build.gradle} ./android/
fi

if [ "$1" == "to" ]; then
  rsync -a --exclude node_modules --exclude .git . $DIR/node_modules/react-native-mo-vibrate/
fi
