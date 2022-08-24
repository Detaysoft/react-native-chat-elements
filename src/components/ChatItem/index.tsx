import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IChatItemProps} from '../../type';
import styles from './ChatItem-css';

const index = (props: IChatItemProps) => {
  return (
    <TouchableOpacity
      onPress={props.handleOnPress}
      onLongPress={props.handleOnLongPress}
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
            <Image source={props.source} style={styles.userImage} />
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
              //whiteSpace: 'nowrap',
              overflow: 'hidden',
              //textOverflow: 'ellipsis',
            }}>
            <View>{props.subTitleStatus(props.subtitleStatus)}</View>
            {props.renderTypes().map((x: any, i: number) => {
              if (x === ' ') return;
              if (typeof x === 'object') {
                return (
                  <View key={i} style={{padding: 0, margin: -6}}>
                    {x}
                  </View>
                );
              }
              return (
                <Text
                  key={i}
                  style={styles.chatMessage}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {x}
                </Text>
              );
            })}
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
              {props.dateCustomFormat() || ' '}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default index;
