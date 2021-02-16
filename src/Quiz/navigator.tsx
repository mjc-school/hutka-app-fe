import * as React from 'react';
import {
    createStackNavigator,
    HeaderBackButton,
} from '@react-navigation/stack';

import {
    QuizResult,
    QuizSwipable,
    QuizConfirmation,
    QuizWaiting,
} from './screens';
import { PlaceDescription } from '../Dashboard/screens';
import { BackButton } from '../Dashboard/components';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const QuizStack = createStackNavigator<any>();

export default function QuizNavigator() {
    return (
        <QuizStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="QuizConfirmation"
        >
            <QuizStack.Screen
                name="QuizConfirmation"
                component={QuizConfirmation}
            />

            <QuizStack.Screen name="Quiz" component={QuizSwipable} />
            <QuizStack.Screen name="QuizWaiting" component={QuizWaiting} />
            <QuizStack.Screen name="QuizResult" component={QuizResult} />
        </QuizStack.Navigator>
    );
}
