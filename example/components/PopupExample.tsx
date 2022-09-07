import React from 'react';
import {Popup} from '../../src/components';

type Props = {};

const PopupExample = (props: Props) => {
  return (
    <Popup
      source={require('../../assets/calendar.jpg')}
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
        onPress: () => {
          console.log('popup clicked');
        },
      }}
    />
  );
};

export default PopupExample;
