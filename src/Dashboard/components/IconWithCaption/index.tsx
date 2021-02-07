import React from 'react';
import { Text, TextPropTypes, TextStyle } from 'react-native';
import * as Icons from '@expo/vector-icons';

import { Body4, Colors, IconProps } from '../../../common';

interface IconWithCaptionProps extends IconProps {
    caption?: string;
    textStyles?: TextStyle;
}

export const IconWithCaption = ({
    iconName,
    caption = '',
    iconType,
    iconColor,
    textStyles = {},
    iconSize = 12,
}: IconWithCaptionProps) => {
    const IconProvider: any = Icons[iconType];
    return (
        <Body4 style={textStyles}>
            <IconProvider
                name={iconName}
                size={iconSize}
                color={iconColor || Colors.accent}
                style={{ paddingRight: 10 }}
            />
            {caption}
        </Body4>
    );
};
