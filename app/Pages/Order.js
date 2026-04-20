import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';

export default function Order() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Страница заказов</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});