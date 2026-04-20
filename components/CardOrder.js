import { Image, StyleSheet, Text, View } from 'react-native';

export default function CardOrder() {
  return (
    <View style={stylesCardOrder.container}>
      <Image style={stylesCardOrder.img} source={require('../assets/images/order-01.png')} />
      <View style={stylesCardOrder.block}>
        <Text style={stylesCardOrder.title}>McDonald's</Text>
        <Text style={stylesCardOrder.description}
          numberOfLines={2}
          ellipsizeMode="tail">Shortbread, chocolate turtle cookies, and red velvet. turtle cookies, and red velvet. turtle cookies, and red velvet.</Text>
        <Text style={stylesCardOrder.price}>USD7.4</Text>
      </View>
    </View>
  );
}

const stylesCardOrder = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 18,
  },
  img: {
    height: 110,
    width: 110,
    borderRadius: 8,
  },
  block: {
    flex: 1,

  },
  title: {
    marginBottom: 6,
    fontFamily: 'SFProText500',
    fontSize: 18,
  },
  description: {
    marginBottom: 12,
    fontFamily: 'SFProText400',
    fontSize: 16,
    color: '#868686',
  },
  price: {
    fontFamily: 'SFProText600',
    color: '#22A45D',
    fontSize: 14,
    textAlign: 'right',
  }

});