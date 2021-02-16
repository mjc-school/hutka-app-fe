import React from 'react';
import {SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import 'react-native-get-random-values';
// import { SafeAreaView } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { Store } from './src/redux/index';
import { Colors } from './src/common';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={Store}>
                 <StatusBar style='auto' backgroundColor={'#FEE900'}/>
                <SafeAreaView style={{flex: 1}}>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                    </SafeAreaView>
            </Provider>
        );
    }
}
