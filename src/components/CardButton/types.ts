export enum AppIconTypes {
    Blue = 'Blue',
    Grass = 'Grass',
    Green = 'Green',
    Orange = 'Orange',
    Red = 'Red',
    Yellow = 'Yellow',
}

export interface CardButtonProps {
    type: AppIconTypes;
    backgroundColor: string;
    onPress?: (any) => void;
    text: string;
}
