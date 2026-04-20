import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto400: require('../assets/fonts/Roboto-Regular.ttf'),
    Roboto700: require('../assets/fonts/Roboto-Bold.ttf'),
    SFProText400: require('../assets/fonts/SFProText-Regular.ttf'),
    SFProText500: require('../assets/fonts/SFProText-Medium.ttf'),
    SFProText600: require('../assets/fonts/SFProText-Semibold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}