import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors, TextStyles } from '../../../common';
import { ButtonProps } from './types';
import cn from 'react-native-classnames';



export default function Button(props: ButtonProps) {
    const {onPress, text, buttonStyle, textStyle} = props;
    const containerStyles = cn(styles, "container", buttonStyle);
    const textStyles =cn(styles, text, textStyle);

  return (
        <TouchableOpacity  style={containerStyles} onPress={onPress}>
          <Text style={textStyles}>
          {text}
          </Text>
        </TouchableOpacity>
  );
}

const styles = ({
  container: {
    minHeight: 44,
    minWidth: 343,
    flex: 0, 
    justifyContent: 'center',
    alignItems: "center",
  },
  primary:{
      backgroundColor: Colors.primary,
      borderRadius: 8,
    borderStyle: 'solid',
    borderColor: Colors.border,
    borderWidth: 1
  },
  secondary:{
    backgroundColor: Colors.secondaryButton,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
},
transparent:{
  borderColor: Colors.secondaryButton,
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 8,
},
  text: TextStyles.H6
});
