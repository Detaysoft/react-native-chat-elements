import React from 'react';
import {Avatar, ChatButton} from './components';
import Popup from './components/Popup';

const components = {
  avatar: <Avatar />,
  chatButton: (
    <ChatButton
      title="deneme"
      contentStyle={{
        color: 'red',
        backgroundColor: 'yellow',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
      }}
      // onlyView={true}
      onPress={() => {
        console.log('click');
      }}
    />
  ),
  popup: (
    <Popup
      source={require('../assets/calendar.jpg')}
      title={'title'}
      text={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua'
      }
      button={{
        title: 'got it',
        contentStyle: {
          backgroundColor: 'blue',
          color: 'white',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          fontSize: 16,
        },
        onPress: () => {
          console.log('popup clicked');
        },
      }}
    />
  ),
};

export default components;
