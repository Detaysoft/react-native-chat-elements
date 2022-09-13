import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {MessageViewType} from '../../type';
import MessageTypes from '../Messages';
import styles from './messageView-css';

const MessageView: FC<MessageViewType> = (props: MessageViewType) => {
  return (
    <View
      style={[
        styles.messageBox,
        props.selected === true && styles.selectedMessageItem,
      ]}>
      {props?.type === 'meeting' &&
      (props?.data?.eventType === 'reject' ||
        props?.data?.eventType === 'cancel') ? (
        <View style={styles.seperatorDate}>
          <View
            style={{
              ...styles.centeredDate,
              flexDirection: 'row',
              backgroundColor: '#ec764fd6',
              maxWidth: '55%',
            }}>
            {props.phoneIcon}
            <Text style={styles.seperatorDateText}>{props.phoneText}</Text>
          </View>
        </View>
      ) : props?.type === 'system' ? (
        <MessageTypes.SystemMessage {...props} />
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.onPressCancelSelect}
          onLongPress={props.onLongPressSelectMessage}>
          <View
            style={[
              props.position === 'right'
                ? styles.sendingChatMessageItemContainer
                : styles.receivedChatMessageItemContainer,
            ]}>
            <View
              style={[
                props.messageColor,
                props.sended === 'notsended'
                  ? {borderWidth: 1, borderColor: 'red'}
                  : {},
              ]}>
              {props.chatType === 'groupchat' && props.position === 'left' && (
                <TouchableOpacity onPress={props.onPressGroupChat}>
                  <Text style={styles.groupChatUserName}>{props.ownerId}</Text>
                </TouchableOpacity>
              )}

              {props.type === 'reply' && props.reply && (
                <MessageTypes.ReplyMessage {...props} />
              )}

              {props.type === 'text' && <MessageTypes.TextMessage {...props} />}

              {props.type === 'photo' && (
                <MessageTypes.PhotoMessage {...props} />
              )}

              {props.type === 'video' && (
                <MessageTypes.VideoMessage {...props} />
              )}

              {props.type === 'file' && <MessageTypes.FileMessage {...props} />}

              {props.type === 'meeting' && (
                <MessageTypes.MeetingMessage {...props} />
              )}
              {props.type === 'meetingLink' && (
                <MessageTypes.MeetingLinkMessage {...props} />
              )}

              {props.type === 'location' && (
                <MessageTypes.LocationMessage {...props} />
              )}

              {props.type === 'audio' && (
                <MessageTypes.AudioMessage {...props} />
              )}

              <View
                style={[
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    // flex: 1,
                  },
                  props.type === 'text' && {
                    position: 'absolute',
                    right: 5,
                    bottom: 1,
                  },
                ]}>
                <Text
                  style={[
                    styles.chatTime,
                    props.type === 'text' && {
                      marginTop: -20,
                    },
                  ]}>
                  {props.date}
                </Text>
                {props.position === 'right' &&
                  props.retracted !== true &&
                  props.sendStatusIcon}
              </View>
            </View>
          </View>

          {props.sended === 'notsended' && (
            <TouchableOpacity
              onLongPress={props.onLongPressSelectMessage}
              style={
                props.selected === true
                  ? {display: 'none'}
                  : styles.messageSendingError
              }
              onPress={() => props.reSendMessage(props)}>
              {props.resendIcon}
              <Text style={[styles.messageSendingErrorText, {color: 'red'}]}>
                {props.messageSendingErrorText}
              </Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MessageView;
