import { StyleSheet, View } from 'react-native';

export default function ListFood() {
  return (
    <View>
      <Header />
      <ScrollView>
        <View style={stylesListFood.container}>
          <CardFood />
          <CardFood />
          <CardFood />
          <CardFood />
          <CardFood />
          <CardFood />
        </View>
      </ScrollView>
    </View>

  );
}

const stylesListFood = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: 15,
  },
});
