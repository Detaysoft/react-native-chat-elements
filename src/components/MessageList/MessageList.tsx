// @ts-nocheck
import React, {FC, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMessageListProps, MessageType, MessageViewType} from '../../type';
import MessageReaction from '../MessageReaction/MessageReaction';
import MessageView from '../MessageView/MessageView';
import {setCallBack} from '../test';
import styles from './messageList-css';

const MessageList: FC<IMessageListProps> = (props: IMessageListProps) => {
  const MemorizedMessageView = React.memo(MessageView);
  const [showMessageActions, setShowMessageActions] = useState(false);
  const [data, setdata] = useState('');

  const setMessage = data => {
    props.messageList.map(x => {
      if (x !== undefined && x.id === data) {
        setdata(x);
        setShowMessageActions(true);
      }
    });
  };

  const revertArray = array => {
    var newArray = [];
    for (let i = array.length - 1; i >= 0; i--) newArray.push(array[i]);
    return newArray;
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={{flex: 0}}
        keyboardShouldPersistTaps={'always'}
        onScroll={e => props.onScroll(e)}
        scrollEventThrottle={100}
        style={styles.contentArea}>
        <View style={styles.contentAreaListView}>
          {revertArray(props.messageList).map((item: any, i: any) => (
            <MemorizedMessageView
              key={i}
              {...item}
              onLongPress={() => setMessage(item.id)}
              onLongPressSelectMessage={() => setMessage(item.id)}
            />
          ))}
          {props.endOfMam && (
            <View style={styles.notificationPanel}>
              <View style={styles.notificationPanelContent}>
                <Text
                  style={{
                    marginLeft: 8,
                    paddingTop: 2,
                    paddingBottom: 2,
                    color: '#fff',
                    fontSize: 13,
                  }}>
                  {props.noMoreMessages}
                </Text>
              </View>
            </View>
          )}
          {props.mamLoading && (
            <ActivityIndicator
              animating={true}
              style={styles.spinnerStyle}
              size="large"
              color="#8eadbc"
            />
          )}
        </View>
      </ScrollView>
      {showMessageActions && (
        <MessageReaction
          onPressShowMessageActions={() => setShowMessageActions(false)}
          data={data}
        />
      )}
    </>
  );
};

export default MessageList;
