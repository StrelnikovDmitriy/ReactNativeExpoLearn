import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function CardFood() {
  return (
    <View style={stylesCardFood.container}>
      <Image style={stylesCardFood.img} source={require('../assets/images/product-01.png')} />
      <Text style={stylesCardFood.text}>The Halal Guys</Text>
      <Pressable style={stylesCardFood.btn}>
        <Text style={stylesCardFood.btnText}>10 $</Text>
      </Pressable>
    </View>
  );
}

const stylesCardFood = StyleSheet.create({
  container: {
    width: 160,
  },
  text: {
    marginVertical: 10,
    fontFamily: 'SFProText500',
    fontSize: 16,
  },
  img: {
    height: 140,
    width: 160,
    borderRadius: 8,
  },
  btn: {
    paddingVertical: 7,
    backgroundColor: '#22A45D',
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Roboto700',
    fontSize: 14,
    textAlign: 'center',
  },
});
