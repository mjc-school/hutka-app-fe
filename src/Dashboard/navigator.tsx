import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../common/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Home, Map, Routes, PlaceDescription, Route } from './screens';
import { BackButton } from './components';
import TabTwoScreen from './screens/Map';

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Place"
            tabBarOptions={{ activeTintColor: Colors.accent }}
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name="Main"
                component={Home}
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

            <BottomTab.Screen
                name="Place"
                component={PlaceDescription}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="map-marker" color={color} />
                    ),
                    headerLeft: BackButton,
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
        <TabOneStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <TabOneStack.Screen name="Home" component={Home} />
            <TabOneStack.Screen name="Map" component={Map} />
            <TabOneStack.Screen
                name="Place"
                component={PlaceDescription}
                options={{ headerLeft: BackButton }}
            />
            <TabOneStack.Screen
                name="Route"
                component={Route}
                options={{ headerLeft: BackButton }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

// function Place() {
//     return (
//         <TabTwoStack.Navigator op>
//             <TabTwoStack.Screen
//                 name="TabTwoScreen"
//                 component={Routes}
//                 options={{ headerLeft }}
//             />
//         </TabTwoStack.Navigator>
//     );
// }
