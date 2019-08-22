import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Vibrate } from 'react-native-mo-vibrate';

class App extends React.PureComponent<{}> {
  public render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ height: 100 }} />

        <TouchableOpacity
          onPress={() => {
            Vibrate.vibrate(Vibrate.Type.MEDIUM);
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
