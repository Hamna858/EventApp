import { StatusBar } from 'expo-status-bar';
import { Text, View, } from 'react-native';
import { Button } from 'react-native-paper';


export default function Component() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Button icon="camera">
        Press me
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
};

