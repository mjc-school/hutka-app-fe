import React, { useState } from 'react';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { IconCircleButton, StyledButton } from '../../components';
import { Colors } from '../../common';
import { ProgressBar } from '../components/ProgressBar';
import {
    CardSetup,
    IconCardSetup,
    ImageCardSetup,
    InputCardSetup,
} from './CardSetup';

const cardSetups: CardSetup[] = [
    new IconCardSetup('', '', 'Как планируешь передвигаться?'),
    new ImageCardSetup('', 'Хочешь отдохнуть на природе?'),
    new InputCardSetup('', '', 'Из какого города стартуешь?'),
];

export default function QuizSwipable(props) {
    const { navigation } = props;
    const [cardIndex, setCardIndex] = useState(0);
    const [currCardValid, setCurrCardValid] = useState(
        cardSetups[cardIndex] instanceof ImageCardSetup,
    );
    const [swipeDirection, setSwipeDirection] = useState('');

    let swiperRef: any;

    const Examplecard = {
        type: 'imageCard',
        imageUri:
            'https://lh3.googleusercontent.com/proxy/pHrh8pkd1TIuvjR4SmJrFJW3qmX-TjBKiTGFFTDpjI_nupe1pRjumUycRNzYLFzn5AwY16MrZ54l6g276VC2m6T2twxLZVklbVa2NdmUWf9yOYKyFkfuJNhtentiNwiXJrVfalyh86pL3-mLg9Ixv_5DmCgr3H6-c1I',
        caption: 'Хочешь отдохнуть на природе?',
        parameter: 'nature',
        result: undefined,
    };

    const onSwiped = React.useCallback((idx: number) => {
        setCurrCardValid(cardSetups[idx + 1] instanceof ImageCardSetup);
        setCardIndex(idx + 1);
    }, []);

    const renderCard = (card: CardSetup) => {
        if (card instanceof CardSetup) {
            return (
                <card.component
                    {...card}
                    updateResult={value => {
                        card.setResult(value);
                        setCurrCardValid(card.valid);
                    }}
                />
            );
        }
        return <View />;
    };

    const onSwipedAll = () => {
        navigation.navigate('QuizWaiting');
    };

    const onGoToDashboard = () => {
        navigation.navigate('Dashboard');
    };

    return (
        <View style={styles.container}>
            <ProgressBar maxItems={cardSetups.length} currentItem={cardIndex} />
            <View style={styles.cardContainer}>
                <Swiper
                    ref={swiper => (swiperRef = swiper)}
                    cards={cardSetups}
                    renderCard={renderCard}
                    onSwiped={onSwiped}
                    onSwipedAll={onSwipedAll}
                    cardIndex={0}
                    containerStyle={{
                        flex: 1,
                        maxHeight: '45%',
                        maxWidth: '100%',
                        alignSelf: 'baseline',
                    }}
                    backgroundColor={Colors.greyLight}
                    verticalSwipe={false}
                    horizontalSwipe={
                        cardSetups[cardIndex] instanceof ImageCardSetup
                    }
                    stackSize={1}
                />
            </View>

            {cardSetups[cardIndex] instanceof ImageCardSetup ? (
                <View style={styles.primaryButtonsWrapper}>
                    <View style={styles.iconButtonsContainer}>
                        <IconCircleButton
                            color="#000000"
                            name="close"
                            iconType="EvilIcons"
                            onPress={() => swiperRef.swipeLeft()}
                        />
                        <IconCircleButton
                            color="#e76b6b"
                            name="heart"
                            iconType="FontAwesome"
                            onPress={() => swiperRef.swipeRight()}
                        />
                    </View>
                </View>
            ) : (
                <View style={styles.primaryButtonsWrapper}>
                    <StyledButton
                        disabled={!currCardValid}
                        buttonStyle="primary"
                        onPress={() => swiperRef.swipeRight()}
                    >
                        <Text>
                            {'Далее  '}
                            <FontAwesome5 name="chevron-right" />
                        </Text>
                    </StyledButton>
                </View>
            )}

            <View style={{ alignSelf: 'center', top: '80%' }}>
                <StyledButton
                    buttonStyle="transparent"
                    text="Пропустить опрос"
                    onPress={onGoToDashboard}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    cardContainer: {
        top: '-5%',
        maxWidth: '30%',
        alignSelf: 'baseline',
    },
    card: {
        maxWidth: '50%',
        borderRadius: 4,
        borderWidth: 2,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    primaryButtonsWrapper: {
        alignSelf: 'center',
        top: '80%',
        marginTop: 14,
        marginBottom: 10,
    },
    iconButtonsContainer: {
        flex: 0,
        flexBasis: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: 150,
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: Colors.basic,
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent',
    },
});
