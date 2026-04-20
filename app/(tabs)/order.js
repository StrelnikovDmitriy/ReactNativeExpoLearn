import { StyleSheet, View } from 'react-native';
import CardOrder from '../../components/CardOrder';
import Header from '../../components/Header';

export default function Order() {
  return (
    <View style={styles.container}>
        <Header/>
      <CardOrder />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});