import * as React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import uuid from 'uuid-random';

import { Colors, H1, H2, Body1, PlaceType } from '../../common';

import { IconWithCaption, BackButton } from '../components';

// import { KmlLayer, Marker } from "react-google-maps";

const defaultPlace: PlaceType = {
    _id: uuid(),
    name: 'Несвижcкий Замок',
    location: ['Минская область', 'Несвижский район'],
    tags: ['История', 'Архитектура'],
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

export default function PlaceDescription(props: { place: PlaceType }) {
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
            <View style={styles.body}>
                <Spacer>
                    {/* <HeaderImage imgUrl={imgUrl} /> */}
                    <View style={styles.headerText}>
                        <H1>{name}</H1>

                        <IconWithCaption
                            iconName="map-pin"
                            iconType="Feather"
                            caption={locationCaption}
                            textStyles={[{ color: Colors.secondary }]}
                        />
                    </View>

                    <H2 style={{ color: Colors.basic }}>Описание</H2>

                    <Body1 style={{ color: Colors.basicSecond }}>
                        {description}
                    </Body1>
                </Spacer>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
    },
    horizontalSpacing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        flex: 1,
        width: '100%',
        height: 60,

        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: Colors.white,
        textAlign: 'left',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    },
    imageStyles: {
        width: '100%',
        height: '100%',
    },

    body: {
        padding: 16,
    },
});
