import React, { ReactChild, ReactElement } from 'react';
import { Text, TextProps, TextPropTypes, TextStyle } from 'react-native';
import * as TextStyles from './TextStyles';

interface StyledTextPropTypes extends TextProps {
    children: ReactChild | ReactChild[];
}

export const H1 = ({ style, ...rest }: StyledTextPropTypes) => (
    <Text {...rest} style={[TextStyles.H1, style]} />
);

export const H2 = ({ style, ...rest }: StyledTextPropTypes) => (
    <Text {...rest} style={[TextStyles.H2, style]} />
);

export const H6 = ({ style, ...rest }: StyledTextPropTypes) => (
    <Text {...rest} style={[TextStyles.H6, style]} />
);
export const H7 = ({ style, ...rest }: StyledTextPropTypes) => (
    <Text {...rest} style={[TextStyles.H7, style]} />
);

export const Body1 = ({ style, ...rest }: StyledTextPropTypes) => (
    <Text {...rest} style={[TextStyles.Body1, style]} />
);

export const Body2 = ({ style, ...rest }: StyledTextPropTypes) => (
    <Text {...rest} style={[TextStyles.Body2, style]} />
);

export const Body4 = ({ style, ...rest }: StyledTextPropTypes) => (
    <Text {...rest} style={[TextStyles.Body2, style]} />
);

export const Body5 = ({ style, ...rest }: StyledTextPropTypes) => (
    <Text {...rest} style={[TextStyles.Body5, style]} />
);

export const LargeText = ({ style, ...rest }: StyledTextPropTypes) => (
    <Text {...rest} style={[TextStyles.Large, style]} />
);
