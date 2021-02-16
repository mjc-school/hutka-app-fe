import React, { useState, useRef } from 'react';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import {
    IconCircleButton,
    ImageCard,
    IconCard,
    InputCard,
    StyledButton,
} from '../../components';
import { Colors } from '../../common';
import { ProgressBar } from '../components/ProgressBar';

interface CardSetup {
    cardComponent: string;
    buttonsSetup: 'default' | 'icons';
}
const cardSetups: readonly CardSetup[] = [
    { cardComponent: 'IconCard', buttonsSetup: 'default' },
    { cardComponent: 'ImageCard', buttonsSetup: 'icons' },
    { cardComponent: 'InputCard', buttonsSetup: 'default' },
];

export default function QuizSwipable(props) {
    const { navigation } = props;
    const [swipedAllCards, setSwipedAllCards] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState('');

    const swiperRef = useRef();

    const onSwiped = type => {
        console.log(`on swiped ${type}`);
    };

    const Examplecard = {
        type: 'imageCard',
        imageUri:
            'https://lh3.googleusercontent.com/proxy/pHrh8pkd1TIuvjR4SmJrFJW3qmX-TjBKiTGFFTDpjI_nupe1pRjumUycRNzYLFzn5AwY16MrZ54l6g276VC2m6T2twxLZVklbVa2NdmUWf9yOYKyFkfuJNhtentiNwiXJrVfalyh86pL3-mLg9Ixv_5DmCgr3H6-c1I',
        caption: 'Хочешь отдохнуть на природе?',
        parameter: 'nature',
        result: undefined,
    };

    const cards = React.useMemo(
        () => cardSetups.map(cs => cs.cardComponent),
        [],
    );

    const renderCard = card => {
        if (card === 'InputCard') {
            return <InputCard />;
        }
        if (card === 'IconCard') {
            return <IconCard />;
        }
        if (card === 'ImageCard') {
            return (
                <ImageCard
                    imageUri={Examplecard.imageUri}
                    caption={Examplecard.caption}
                />
            );
        }
        return <View />;
    };

    const onSwipedAllCards = () => setSwipedAllCards(false);

    const swipeLeft = () => {
        swiperRef.swipeLeft();
    };
    const onGoToDashboard = () => {
        navigation.navigate('Dashboard');
    };

    return (
        <View style={styles.container}>
            <ProgressBar maxItems={cards.length} currentItem={cardIndex} />
            <View style={styles.cardContainer}>
                <Swiper
                    ref={swiperRef}
                    cards={cards}
                    renderCard={renderCard}
                    onSwiped={idx => setCardIndex(idx + 1)}
                    onSwipedAll={() => {
                        setSwipedAllCards(true);
                    }}
                    cardIndex={0}
                    containerStyle={{
                        flex: 1,
                        maxHeight: '45%',
                        maxWidth: '100%',
                        alignSelf: 'baseline',
                    }}
                    backgroundColor={Colors.greyLight}
                    disableTopSwipe
                    disableBottomSwipe
                    stackSize={1}
                />
            </View>

            {cardSetups[cardIndex].buttonsSetup === 'icons' ? (
                <View style={styles.buttonContainer}>
                    <IconCircleButton
                        color="#e76b6b"
                        name="heart"
                        iconType="FontAwesome"
                    />
                    <IconCircleButton
                        color="#000000"
                        name="close"
                        iconType="EvilIcons"
                    />
                </View>
            ) : (
                <View
                    style={{
                        alignSelf: 'center',
                        top: '80%',
                        marginTop: 14, // push content below the same way as buttonContainer
                        marginBottom: 10,
                    }}
                >
                    <StyledButton
                        buttonStyle="primary"
                        onPress={onGoToDashboard}
                    >
                        {'Далее  '}
                        <FontAwesome5 name="chevron-right" />
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
    buttonContainer: {
        flex: 0,
        flexBasis: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: 150,
        marginBottom: 10,
        maxHeight: '10%',
        alignItems: 'center',
        alignSelf: 'center',
        top: '80%',
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
