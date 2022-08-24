import React from 'react';
import {IChatListProps} from '../../type';
import {ChatItem} from '..';
import styles from './ChatList-css';
import {Text} from 'react-native';

const ChatList = (props: IChatListProps) => {
  return (
    <ChatItem
      badge={1}
      date="now"
      title="bensu"
      listType="chatList"
      noImage={false}
      source={require('../../../assets/calendar.jpg')}
      type={'single'}
      renderTypes={() => [
        'Apple',
        'Banana',
        'cancel',
        'Apple',
        'Banana',
        'cancel',
      ]}
      dateCustomFormat={() => 'right now'}
      subTitleStatus={() => <Text>'waiting'</Text>}
      handleOnPress={() => console.log('handle on press')}
      handleOnLongPress={() => console.log('handle on long press')}
    />
  );
};

export default ChatList;
