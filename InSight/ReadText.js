import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function ReadText() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignSelf: 'flex-start', paddingLeft: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>InSight</Text>
      </View>

      <View style={{ flex: 10, alignSelf: 'stretch', alignItems: 'center', borderWidth: 2, margin: 10 }}>
        <Text>Read Text</Text>
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Text>Find Object</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Text>Read Text</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
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
