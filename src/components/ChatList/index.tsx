import React, {FC} from 'react';
import {IChatListProps} from '../../type';
import {ChatListItem} from '..';
import styles from './chatList-css';
import {FlatList, Text, View} from 'react-native';

const ChatList: FC<IChatListProps> = (props: IChatListProps) => {
  const MemorizedChatListItem = React.memo(ChatListItem);

  const chatlistRenderItem = ({item}: any) => {
    return (
      <MemorizedChatListItem
        id={item.id}
        title={item.name}
        subtitle={item.lastMessage}
        subtitleStatus={item.lastMessageStatus}
        avatar={item.photo}
        date={item.date || null}
        badge={item.inUnseen > 0 ? item.inUnseen : null}
        status={item.status}
        platform={item.platform}
        type={item.type}
        listType={'chatList'}
        onPress={item.onItemPress}
        onLongPress={item.onItemLongPress}
        messageRenderer={props.messageRenderer}
        subtitleStatusFunc={props.subtitleStatusFunc}
        dateCustomFormat={props.dateCustomFormat}
      />
    );
  };

  return (
    <View style={[styles.chatList, props.containerStyle]}>
      <View style={[styles.emptyChat, props.messageContainerStyle]}>
        {props.dataSource.length < 1 && (
          <Text
            style={[
              styles.emptyChatMessage,
              props.emptyChatMessageContainerStyle,
            ]}>
            {'Konuşma listeniz boş.'}
          </Text>
        )}
      </View>
      <FlatList
        data={props.dataSource}
        keyExtractor={item => item.id}
        renderItem={chatlistRenderItem}
      />
    </View>
  );
};

export default ChatList;

ChatList.defaultProps = {};
