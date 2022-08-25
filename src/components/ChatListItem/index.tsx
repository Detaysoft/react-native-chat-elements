import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IChatListItemProps} from '../../type';
import Avatar from '../Avatar';
import styles from './chatListItem-css';

const ChatListItem: FC<IChatListItemProps> = (props: IChatListItemProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      style={styles.listItemContainer}>
      <View
        style={{
          width: 70,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {!props.noImage && (
          <View
            style={
              props.type === 'single'
                ? [
                    styles.userImageStatus,
                    {borderColor: props.status || '#fff'},
                  ]
                : styles.userImageArea
            }>
            <Avatar source={props.avatar} style={styles.userImage} />
          </View>
        )}
      </View>
      <View style={styles.userDetailArea}>
        <View style={styles.userDetailItems}>
          <Text style={styles.userName} ellipsizeMode="tail" numberOfLines={1}>
            {props.title || ' '}
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '92%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              overflow: 'hidden',
            }}>
            <View>{props.subtitleStatusFunc?.(props.subtitleStatus)}</View>
            {props.messageRenderer?.()}
          </View>
          {props.badge > 0 && (
            <View style={styles.messageCount}>
              <Text style={styles.messageCountText}>{props.badge}</Text>
            </View>
          )}
        </View>
        {props.listType === 'chatList' && props.date && (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 3,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 13,
                color: '#bcbcbc',
                marginRight: 3,
                marginTop: 2,
              }}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {props.dateCustomFormat?.() || ' '}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
