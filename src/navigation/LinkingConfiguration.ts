import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            QuizStack: {
                screens: {
                    QuizConfirmation: 'confirmation',
                    Quiz: 'quiz',
                },
            },
            Dashboard: {
                screens: {
                    Dashboard: {
                        screens: {
                            Main: 'main',
                            Map: 'map',
                            Routes: 'Routes',
                            Place: 'Place',
                        },
                    },
                },
            },
            Root: {
                screens: {
                    TabOne: {
                        screens: {
                            TabOneScreen: 'one',
                        },
                    },
                    TabTwo: {
                        screens: {
                            TabTwoScreen: 'two',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};
