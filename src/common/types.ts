import { StyleProp, TextProps } from 'react-native';

export interface PlaceType {
    _id: string;
    name: string;
    coords?: PositionType;
    imgUrl?: string;
    location: string;
    tags?: string[];
    description: string;
}

export interface RouteType {
    _id: string;
    name: string;
    points: PlaceType[];
    coords?: PositionType;
    imgUrl?: string;
    tags?: string[];
    description: string;
}

export interface LocationType {
    _id: string;
    name: string;
    coords?: PositionType;
}

export interface PositionType {
    lat: number;
    lng: number;
    latitude?: number;
    longitude?: number;
}

export interface IconProps {
    iconName: string;
    iconSize?: number;
    iconColor?: string;
    iconType: keyof typeof UsedIconTypes;
    iconStyle?: StyleProp<TextProps>;
}

enum UsedIconTypes {
    'Ionicons',
    'Feather',
}
enum IconTypes {
    'AntDesign',
    'Entypo',
    'EvilIcons',
    'Fontisto',
    'FontAwesome',
    'FontAwesome5',
    'Foundation',
    'MaterialCommunityIcons',
    'MaterialIcons',
    'Octicons',
    'SimpleLineIcons',
    'Zocial',
}
