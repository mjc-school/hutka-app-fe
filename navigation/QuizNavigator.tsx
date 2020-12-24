import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import {Quiz, QuizConfirmation} from '../src/Quiz';

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const QuizStack = createBottomTabNavigator<TabOneParamList>();

export default function TabOneNavigator() {
  return (
    <QuizStack.Navigator>
      <QuizStack.Screen
        name="QuizConfirmation"

        component={QuizConfirmation}
        options={{headerShown:false}}
      />
        <QuizStack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </QuizStack.Navigator>
  );
}