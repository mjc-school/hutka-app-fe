import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Quiz, QuizSwipable, QuizConfirmation } from "../src/Quiz";
import TabTwoScreen from "../src/screens/TabTwoScreen";

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const QuizStack = createStackNavigator<TabOneParamList>();

export default function TabOneNavigator() {
  return (
    <QuizStack.Navigator>
      <QuizStack.Screen
        name="QuizConfirmation"
        // component={QuizConfirmation}
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
      <QuizStack.Screen
        name="Quiz"
        component={QuizSwipable}
        options={{ headerShown: false }}
      />
    </QuizStack.Navigator>
  );
}
