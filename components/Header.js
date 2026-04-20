import { StyleSheet, Text, View } from 'react-native';
import BackIcon from '../assets/icons/back.svg';

export default function Header() {
	return (
		<View style={stylesHeader.container}>
			<BackIcon width={12} height={21} fill="black"/>
			<Text style={stylesHeader.text}>Быстрое питание</Text>
		</View>
	)
}

const stylesHeader = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		marginBottom: 18,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		flex: 1,
		fontFamily: 'Roboto700',
		fontSize: 20,
		textAlign: 'center',
		color: '#000',
	},
})