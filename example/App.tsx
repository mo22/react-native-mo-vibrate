import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Vibrate, VibrateType } from 'react-native-mo-vibrate/lib/test';

// import { platform } from './platform'; // tree shaking / minify does not work
// const platform = 'ios'; // tree shaking / minify works
// if (platform === 'ios') {
//   console.log('ONLY-FOR-IOS');
// } else if (platform === 'android') {
//   console.log('ONLY-FOR-ANDROID');
// } else {
//   console.log('ONLY-FOR-UNKOWN');
// }

class App extends React.PureComponent<{}> {
  public render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ height: 100 }} />

        <TouchableOpacity
          onPress={() => {
            Vibrate.vibrate(VibrateType.MEDIUM);
          }}
          style={{
            padding: 10,
            margin: 10,
            borderRadius: 5,
            backgroundColor: 'red',
          }}
        >
          <Text>test</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
