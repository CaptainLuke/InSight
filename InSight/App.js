import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FindObject from './FindObject.js'
import ReadText from './ReadText.js'


const Stack = createNativeStackNavigator();
export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={App}
          options={({ navigation }) => ({
            headerLeft: () => <View></View>,
            headerTitle: () => header(navigation)
          })
          }
        />
        <Stack.Screen
          name="Find Object"
          component={FindObject}
          options={({ navigation }) => ({
            headerLeft: () => <View></View>,
            headerTitle: () => header(navigation)
          })
        }
        />
        <Stack.Screen
          name="Read Text"
          component={ReadText}
          options={({ navigation }) => ({
            headerLeft: () => <View></View>,
            headerTitle: () => header(navigation)
          })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 10, alignSelf: 'stretch', alignItems: 'center', borderWidth: 2, margin: 10 }}>
        <Text>Home Page</Text>
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Find Object') }}>
          <Text>Find Object</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Read Text') }}>
          <Text>Read Text</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}

function header(navigation) {
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{ flex: 1 }}><Text style={{ fontWeight: 'bold', fontSize: 30 }}>InSight</Text></TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#EBEBEB',
  }
});
