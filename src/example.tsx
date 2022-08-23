import React from 'react';
import {Text} from 'react-native';
import {Avatar, ChatButton, Popup, CustomActionSheet} from './components';

const components = {
  avatar: <Avatar source="../assets/download.png" />,
  chatButton: (
    <ChatButton
      // title="deneme"
      contentStyle={{
        color: 'red',
        backgroundColor: 'yellow',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
      }}
      icon={<Text>wkenfk</Text>}
      // onlyView={true}
      onPress={() => {
        console.log('click');
      }}
    />
  ),
  popup: (
    <Popup
      source="../assets/calendar.jpg"
      title={'title'}
      text={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua'
      }
      buttonTitle="got it"
      button={{
        title: 'show popup',
        contentStyle: {
          backgroundColor: 'blue',
          color: 'white',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          fontSize: 16,
        },
        style: {
          position: 'absolute',
          top: 50,
          right: 40,
        },
        onPress: () => {
          console.log('popup clicked');
        },
      }}
    />
  ),
  customActionSheet: (
    <CustomActionSheet
      button={{title: 'Open ActionSheet'}}
      title="Which one do you like ?"
      options={['Apple', 'Banana', 'cancel']}
      cancelButtonIndex={2}
      destructiveButtonIndex={2}
      onPress={index => console.log(index)}
    />
  ),
};

export default components;
