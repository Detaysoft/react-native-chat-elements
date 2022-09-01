import React, {FC} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {IMessageListProps} from '../../type';
import MessageView from '../MessageView';
import styles from './messageList-css';

const MessageList: FC<IMessageListProps> = (props: IMessageListProps) => {
  const MemorizedMessageView = React.memo(MessageView);

  return (
    <ScrollView
      contentContainerStyle={{flex: 0}}
      keyboardShouldPersistTaps={'always'}
      onScroll={e => props.onScroll(e)}
      scrollEventThrottle={100}
      style={styles.contentArea}>
      <View style={styles.contentAreaListView}>
        {props.messageList.map((item: any, i: any) => (
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
