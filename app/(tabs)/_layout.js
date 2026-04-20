import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import FoodIcon from '../../assets/icons/food.svg';
import OrderIcon from '../../assets/icons/order.svg';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#999',
                tabBarStyle: stylesTab.container,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <FoodIcon width={size} height={size} fill={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="order"
                options={{
                    title: 'Order',
                    tabBarIcon: ({ color, size }) => (
                        <OrderIcon width={size} height={size} fill={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

const stylesTab = StyleSheet.create({
    container: {
        height: 60,
    },
});