import { Ionicons } from '@expo/vector-icons';
import React, { Component, ReactElement } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ViewProps } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Body4, H7, H2, Colors } from '../../common';

interface AccordionCardType {
  title: string;
  imageURL: string;
  description: string;
}

interface RightProps extends ViewProps {
  children: ReactElement;
}

const Right = ({style, children, ...otherProps}: RightProps) =>
  (<View style={[{flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end' },style]}>{children}</View>)


const SECTIONS: AccordionCardType[] = [
  {
    title: 'First',
    imageURL: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a tempor velit. Aenean varius nibh ut pretium porta. Praesent fermentum metus nec ex volutpat mattis. Curabitur massa quam, condimentum in blandit sed, pulvinar eu diam. Vivamus porttitor feugiat mi sed blandit. Cras vulputate nisi vitae purus viverra aliquet ut eu neque. Sed feugiat, lacus in malesuada sodales, dui velit pharetra risus, sit amet auctor risus magna vel velit. Nullam eu diam congue, aliquet nisi eget, hendrerit felis. Donec sagittis dui vitae tortor ornare, sed mattis odio volutpat. Fusce scelerisque egestas eros tincidunt feugiat. Morbi venenatis nunc neque, vitae auctor dolor fringilla in. Vivamus turpis quam, porta sed nulla at, ullamcorper pulvinar est.',
  },
  {
    title: 'Second',
    imageURL: 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg',
    description: 'Morbi ut nulla quis ex auctor luctus. Morbi aliquam feugiat malesuada. Cras et velit auctor, blandit purus id, maximus justo. Nullam nibh nisl, aliquet non eleifend eu, pellentesque sit amet nunc. Nullam lacinia, justo vel blandit condimentum, dui mauris porttitor mauris, eu imperdiet enim mi id diam. Donec mattis sed ligula sit amet tincidunt. Duis mattis, purus sit amet pulvinar viverra, risus massa faucibus nisi, a feugiat nulla nibh ac velit. Duis molestie sodales ipsum non interdum. Fusce in nisl a arcu pulvinar convallis eu eget ipsum.',
  },
];

export class AccordionCardList extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = section => {
    return (
      <View style={{paddingTop: 12, backgroundColor: Colors.background}}>
        
      </View>
    );
  };
  // section,
  // key,
  // activeSections.includes(key),
  // sections
  _renderHeader = (card, key, isActive) => {
    const { title, description, imageURL } = card;
  
    return (
      <>
        {isActive ? (
          <View style={[styles.header, styles.roundTopBorders]}>
            <H7>{"  " + (key + 1) + ". " + title}</H7>
            <Right>
              <Ionicons size={16} name={"chevron-up-outline"} />
            </Right>
          </View>
        ) : (
          <View style={[styles.header, styles.roundBorders]}>
            <Image
              style={styles.imageStylesCollapsed}
              source={{ uri: imageURL }}
            />
            <H7>{"  " + (key + 1) + ". " + title}</H7>
            <Right>
              <Ionicons size={16} name={"chevron-down-outline"} />
            </Right>
          </View>
        )}
      </>
    );
  };
  

  _renderContent = (card) => {
    const {title, description, imageURL} = card;
    return (
      <View style={[styles.content, styles.roundBottomBorders]}>
        <Image
                    style={styles.imageStylesActivated}
                    source={{ uri: imageURL }}
                />
        <Body4>{description}</Body4>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        containerStyle={styles.container}
        sectionContainerStyle={{borderRadius: 8}}
        touchableComponent={TouchableOpacity}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 12,
  },
  imageStylesCollapsed:{
    width: 36,
    height: 36,
    borderRadius: 4,
  },
  imageStylesActivated:{
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
  },
  header: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10, paddingRight: 20,
    paddingLeft: 12,
  },
  footer:{
    paddingTop: 12,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 3,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: Colors.accent,
  },
  inactive: {
    backgroundColor: Colors.background,
  },
  roundTopBorders:{borderTopRightRadius: 8, borderTopLeftRadius:8},
  roundBottomBorders:{borderBottomLeftRadius:8, borderBottomRightRadius: 8},
  roundBorders: {borderRadius: 8,},

  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
