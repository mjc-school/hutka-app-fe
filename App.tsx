import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { Store } from './src/redux/index';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={Store}>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
            </Provider>
        );
    }
}
