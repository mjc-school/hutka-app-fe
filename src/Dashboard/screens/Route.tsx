import * as React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { List, Checkbox } from 'react-native-paper';

import uuid from 'uuid-random';

import { Colors, H1, H2, Body5, TextStyles, PlaceType, Body4 } from '../../common';
import { StyledButton } from '../../components';
import {AccordionCardList} from '../../components/AccordionList';

import { routeNames } from '../../utils/kmlparser';
import { IconWithCaption, HeaderImage, BackButton } from '../components';

// import { KmlLayer, Marker } from "react-google-maps";

const defaultPlace: PlaceType = {
    _id: uuid(),
    name: `Несвижский замок`,
    location: 'Минская область',
    coords: {
        lat: 53.2189,
        lng: 26.6779,
    },
    imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/%D0%97%D0%B0%D0%BC%D0%B0%D0%BA-%D0%BF%D0%B0%D0%BB%D0%B0%D1%86_%D1%83_%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%D1%8B_%D0%B7%D0%BD%D1%83%D1%82%D1%80%D1%8B.jpg/1920px-%D0%97%D0%B0%D0%BC%D0%B0%D0%BA-%D0%BF%D0%B0%D0%BB%D0%B0%D1%86_%D1%83_%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%D1%8B_%D0%B7%D0%BD%D1%83%D1%82%D1%80%D1%8B.jpg',
    description:
        'Несвиж — одно из самых туристических мест Белоруссии. Это небольшой городок, в котором, несмотря на многочисленные войны и катаклизмы, сохранились не единичные архитектурные памятники XVI—XVIII веков, а также целый ряд зданий, представляющих архитектуру Речи Посполитой этого периода и отражающих жизнь центра владений крупнейших магнатов, рода Радзивиллов.',
};


const Spacer = ({ children, ...rest }) => (
    <View {...rest}>
        {Array.from(children).map(item => (
            <Text style={{ paddingBottom: 16, textAlign: 'left' }}>{item}</Text>
        ))}
    </View>
);

export default function Route(props: { place: PlaceType }) {
    const { place = defaultPlace } = props;
    const { name, location, description, imgUrl } = place;

    const locationCaption =
        location instanceof Array ? Array.from(location).join(', ') : location;

    return (
        <ScrollView style={styles.container}>
                <BackButton />
                <Image
                    style={styles.imageStyles}
                    resizeMode={'cover'}
                    source={{ uri: imgUrl }}
                />
                <View style={styles.headerText}>
                    <H1 style={{textAlign: 'left'}}>{name}</H1>
                    <View style={styles.headerSub}>
                        <IconWithCaption
                            iconName="map-pin"
                            iconType="Feather"
                            caption={locationCaption}
                            textStyles={[{ color: Colors.accent, textAlignVertical: 'bottom' }]}
                        />
                        <StyledButton containerStyles={styles.headerSubButton} text="На карте" buttonStyle="primary"/>
                    </View>      
                    <Body5 style={{color: Colors.textBasic}}>Описание маршрута</Body5>   
                </View>

            <View style={styles.body}>
                <H2 style={{textAlign: 'left'}}>Маршрут</H2>
           
            <AccordionCardList></AccordionCardList>
            <StyledButton buttonStyle="primary" containerStyles={styles.buttonContainer} text={"Завершить маршрут"}></StyledButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },

    headerSub: {
        justifyContent: 'space-between', flexDirection: 'row', 
        flex: 0, width: '100%',
        marginVertical: 8,
        minHeight: 40,
        height: 40,
         alignItems: 'center',
    },
    headerSubButton: {
        maxWidth: 155,
        minWidth: 155,
        flex: 1,
        height: 40,
        maxHeight: 40,
    },
    horizontalSpacing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        width: '100%',
        paddingTop: 12,
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: Colors.white,
        textAlign: 'left',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    imageStyles: {
        width: '100%',
        height: 200,
    },
    body: {
        margin: 16,
    },
    buttonContainer: {
        marginBottom: 12,
    }
});
