import * as React from 'react';
import { View, TouchableOpacity, Text, PermissionsAndroid } from 'react-native';
import { Vibrate } from 'react-native-mo-vibrate';

function keysOf<T extends {}>(obj: T): (keyof T)[] {
  return Object.keys(obj) as any;
}

export default class Menu extends React.PureComponent<{}> {
  public render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ height: 100 }} />

        <TouchableOpacity
          onPress={() => {
          }}
          style={{
            padding: 10,
            margin: 10,
            borderRadius: 5,
            backgroundColor: 'red',
          }}
        >
          <Text>nothing</Text>
        </TouchableOpacity>

        {keysOf(Vibrate.Type).map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => {
              Vibrate.vibrate(Vibrate.Type[type]);
            }}
            style={{
              padding: 10,
              margin: 10,
              borderRadius: 5,
              backgroundColor: 'red',
            }}
          >
            <Text>{type}</Text>
          </TouchableOpacity>
        ))}

        {Vibrate.android.Module && (
          <TouchableOpacity
            onPress={async () => {
              await PermissionsAndroid.request('android.permission.VIBRATE' as any);
              Vibrate.android.Module!.vibratePattern({
                pattern: [ 1000, 100 ],
                amplitude: [ 255, 255 ],
                repeat: -1,
              });
            }}
            style={{
              padding: 10,
              margin: 10,
              borderRadius: 5,
              backgroundColor: 'red',
            }}
          >
            <Text>android custom</Text>
          </TouchableOpacity>
        )}

        {Vibrate.ios.Module && (
          <TouchableOpacity
            onPress={() => {
              Vibrate.ios.Module!.vibrate(Vibrate.ios.VibrateType.NotificationSuccess);
            }}
            style={{
              padding: 10,
              margin: 10,
              borderRadius: 5,
              backgroundColor: 'red',
            }}
          >
            <Text>ios custom</Text>
          </TouchableOpacity>
        )}

      </View>
    );
  }
}
