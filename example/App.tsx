import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Vibrate } from 'react-native-mo-vibrate';

class App extends React.PureComponent<{}> {
  public render() {
    return (
      <View style={{ backgroundColor: 'red' }}>


        <TouchableOpacity onPress={() => {
          Vibrate.vibrate();
        }}>
          <Text>test</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
