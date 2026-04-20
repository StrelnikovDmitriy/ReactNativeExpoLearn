import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Categories({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Категории</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('ListFood')}
      >
        <Text style={styles.buttonText}>Открыть список еды</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});