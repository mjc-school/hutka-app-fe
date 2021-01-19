import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    Dimensions,
    FlatList,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import { Colors, TextStyles } from '../../common';
import { CardButton, RouteCard, RouteImage } from '../../components';

import { routeNames } from '../../utils/kmlparser';
// import { KmlLayer, Marker } from "react-google-maps";

export default function Home(props: any) {

    const { navigation, chooseRoute,routeNames, routes } = props;

    console.log(routes);
    const onCardPress = ()=> {
        // navigation.
    };
    
    const press = () => console.log('route');

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            <View style={styles.headerContainer}>
                <Text style={styles.headerStyles}>Маршруты</Text>
                <Text
                    style={{
                        ...TextStyles.H6,
                        color: Colors.accent,
                        alignSelf: 'flex-end',
                    }}
                >
                    Из минска
                </Text>
            </View>
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                containerStyle={{
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderBottomColor: 'rgba(0,0,0,0)',
                }}
                // onChangeText={this.updateSearch}
                // value={search}
            />
            <ScrollView
                horizontal
                style={styles.horizontalContainer}
                contentContainerStyle={styles.horizontalPadding}
            >
                <View style={styles.horizontalPadding}>
                    <CardButton
                        backgroundColor={Colors.accent}
                        type={'Orange'}
                        text="Пройти опрос"
                    />
                </View>
                <View style={styles.horizontalPadding}>
                    <RouteImage
                        caption="Браславские озера и Витебская область"
                        imageUri="https://www.belarus.by/dadvimages/001322_568005.jpg"
                        onPress={press}
                    />
                </View>
                <View style={styles.horizontalPadding}>
                    <RouteImage
                        caption="Браславские озера и Витебская область"
                        imageUri="https://www.belarus.by/dadvimages/001322_568005.jpg"
                        onPress={press}
                    />
                </View>
                <View style={styles.horizontalPadding}>
                    <RouteImage
                        caption="Браславские озера и Витебская область"
                        imageUri="https://www.belarus.by/dadvimages/001322_568005.jpg"
                        onPress={press}
                    />
                </View>
                <View style={styles.horizontalPadding}>
                    <RouteImage
                        caption="Браславские озера и Витебская область"
                        imageUri="https://www.belarus.by/dadvimages/001322_568005.jpg"
                        onPress={press}
                    />
                </View>
                <View style={styles.horizontalPadding}>
                    <RouteImage
                        caption="Браславские озера и Витебская область"
                        imageUri="https://www.belarus.by/dadvimages/001322_568005.jpg"
                        onPress={press}
                    />
                </View>
                <View style={styles.horizontalPadding}>
                    <RouteImage
                        caption="Браславские озера и Витебская область"
                        imageUri="https://www.belarus.by/dadvimages/001322_568005.jpg"
                        onPress={press}
                    />
                </View>
                <View style={styles.horizontalPadding}>
                    <RouteImage
                        caption="Браславские озера и Витебская область"
                        imageUri="https://www.belarus.by/dadvimages/001322_568005.jpg"
                        onPress={press}
                    />
                </View>
                <View style={styles.horizontalPadding}>
                    <RouteImage
                        caption="Браславские озера и Витебская область"
                        imageUri="https://www.belarus.by/dadvimages/001322_568005.jpg"
                        onPress={press}
                    />
                </View>
            </ScrollView>
            <RouteCard />
            <RouteCard />
            <RouteCard />
            <RouteCard />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: '90%',
        minWidth: '100%',
        backgroundColor: Colors.background,
    },
    horizontalContainer: {
        maxHeight: 160,
    },
    contentContainer: {},
    horizontalPadding: {
        marginRight: 20,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    mapStyle: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height - 20,
    },
    headerStyles: TextStyles.Large,
    headerContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
});
