import React from 'react';
import { StyleSheet, View, Text, Image, StyleSheetProperties } from 'react-native';
import { Colors, TextStyles } from '../common';
import { StyledButton } from '../components';


import cn from 'react-native-classnames';
import { CommonActions, useLinkProps } from '@react-navigation/native';





export function QuizConfirmation(props: any) {
    const {onPress, text, backgroundStyle, textStyle} = props;
    const containerStyles = cn(styles, "container");
    const textStyles =cn(styles, text, textStyle );
    const buttonContainerStyles = cn(styles, 'buttonContainer');

    const { onGoToQuiz } = useLinkProps({ to: '/quiz'});


  return (
        <View style={containerStyles}>

          <Image style={{ height: 208, width: 208}} source={require('../../assets/images/App Icon.png')} />

          <Text style={TextStyles.Large}>
          Привет! 
          </Text>
          <Text style={TextStyles.H6}>
          Для начала, давай пройдем опрос, и мы подберем для тебя подходящие маршруты
          </Text>
          <View style={buttonContainerStyles}>
          <StyledButton buttonStyle='primary' text='Начать' onPress={onGoToQuiz}/>
          <StyledButton buttonStyle='transparent' text='Пропустить опрос'/>

          </View>
         
        </View>
  );
}

const styles = ({
  container: {
    minHeight: '100%',
    flex: 1, 
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: "column",
  },
  yellow:{
      backgroundColor: Colors.primary,
      borderRadius: 8,
    borderStyle: 'solid',
    borderColor: Colors.border,
    borderWidth: 1
  },
  transparent:{
},
buttonContainer:{
  flexDirection: 'column',
  justifyContent: 'space-around',
height: '20%',
  alignItems: 'center'
},
  text:{
    textAlign: "center",
    color: Colors.basic
  }
});
