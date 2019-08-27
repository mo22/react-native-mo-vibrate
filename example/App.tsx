import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Vibrate } from 'react-native-mo-vibrate';

function keysOf<T extends {}>(obj: T): (keyof T)[] {
  return Object.keys(obj) as any;
}

class App extends React.PureComponent<{}> {
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
            onPress={() => {
              Vibrate.android.Module!.vibratePattern({
                pattern: [ 1000, 100, 100, 1000 ],
                amplitude: [ 255, 100, 100, 50 ],
                repeat: 3,
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

      </View>
    );
  }
}

export default App;
