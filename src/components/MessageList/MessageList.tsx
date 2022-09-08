// @ts-nocheck
import React, {FC, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMessageListProps, MessageType, MessageViewType} from '../../type';
import MessageView from '../MessageView/MessageView';
import {setCallBack} from '../test';
import styles from './messageList-css';

const MessageList: FC<IMessageListProps> = (props: IMessageListProps) => {
  const MemorizedMessageView = React.memo(MessageView);
  const [showMessageActions, setShowMessageActions] = useState(false);
  const [data, setdata] = useState('');

  useEffect(() => {
    setCallBack((data: any) => {
      console.log(props.messageList);

      setShowMessageActions(true);
      let test = props.messageList.map(x => {
        console.log(x);

        if (x !== undefined && x.id === data) {
          setdata(x);
        }
      });
      console.log(test[0], 'from messagelist');
    });
  }, []);

  const revertArray = array => {
    var newArray = [];
    for (let i = array.length - 1; i >= 0; i--) newArray.push(array[i]);
    return newArray;
  };
  return (
    <ScrollView
      contentContainerStyle={{flex: 0}}
      keyboardShouldPersistTaps={'always'}
      onScroll={e => props.onScroll(e)}
      scrollEventThrottle={100}
      style={styles.contentArea}>
      <View style={styles.contentAreaListView}>
        {showMessageActions && (
          <TouchableOpacity
            onPress={() => setShowMessageActions(false)}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              zIndex: 999999999999999999,
            }}>
            <MessageView {...data}></MessageView>
          </TouchableOpacity>
        )}
        {revertArray(props.messageList).map((item: any, i: any) => (
          <MemorizedMessageView key={i} {...item} />
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
  );
};

export default MessageList;
