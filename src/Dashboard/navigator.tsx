import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../common/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Home, Map, Routes } from './screens';
import TabTwoScreen from './screens/Map';

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Main"
            tabBarOptions={{ activeTintColor: Colors.accent }}
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name="Main"
                component={MainNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <BottomTab.Screen
                name="Routes"
                component={Routes}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="routes" color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <BottomTab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="map-marker-outline" color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return (
        <MaterialCommunityIcons
            size={30}
            style={{ marginBottom: -3 }}
            {...props}
        />
    );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function MainNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: 'Tab One Title' }}
            />
            <TabOneStack.Screen
                name="Map"
                component={Home}
                options={{ headerTitle: 'Tab One Title' }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={Routes}
                options={{ headerTitle: 'Tab Two Title' }}
            />
        </TabTwoStack.Navigator>
    );
}
