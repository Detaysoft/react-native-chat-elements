import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IMessageViewProps} from '../../type';
import SystemMessage from '../MessageTypes/SystemMessage';
import styles from './messageView-css';

const MessageView: FC<IMessageViewProps> = (props: IMessageViewProps) => {
  return (
    <View
      style={[
        styles.messageBox,
        props.message.selected === true && styles.selectedMessageItem,
      ]}>
      {props.message.type === 'meeting' &&
      (props.message.data.eventType === 'reject' ||
        props.message.data.eventType === 'cancel') ? (
        <View style={styles.seperatorDate}>
          <View
            style={{
              ...styles.centeredDate,
              flexDirection: 'row',
              backgroundColor: '#ec764fd6',
              maxWidth: '55%',
            }}>
            {/* {props.message.data.eventType === 'reject' && (
              // <IconF name={'phone-missed'} size={20} color={'#f13b3b'} />
            )}
            {props.message.data.eventType === 'cancel' && (
              // <IconM
              //   type={'materialize'}
              //   name={'phone-missed'}
              //   size={20}
              //   color={'#f13b3b'}
              // />
            )} */}

            <Text style={styles.seperatorDateText}>
              {/* {props.message.data.eventType === 'reject'
                ? i18n.get('rejected:call')
                : props.message.data.eventType === 'cancel'
                ? i18n.get('missed:call')
                : null} */}
            </Text>
          </View>
        </View>
      ) : props.message.type === 'system' ? (
        <SystemMessage date={props.message.date} />
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          // onPress={this.onCancelSelect}
          // onLongPress={this.onPressSelectMessage}
        >
          <View
            style={[
              props.message.position === 'right'
                ? styles.sendingChatMessageItemContainer
                : styles.receivedChatMessageItemContainer,
            ]}>
            <View
              style={[
                props.messageColor,
                props.message.sended === 'notsended'
                  ? {borderWidth: 1, borderColor: 'red'}
                  : {},
              ]}>
              {props.message.chatType === 'groupchat' &&
                props.message.position === 'left' && (
                  <TouchableOpacity
                  // onPress={() => {
                  //   GLOBALS.promise.view.emit(
                  //     'openGroupUserChat',
                  //     props.message.ownerId,
                  //   );}}
                  >
                    <Text style={styles.groupChatUserName}>
                      {/* {String(this.getFastName(props.message.ownerId))} */}
                    </Text>
                  </TouchableOpacity>
                )}

              {/* {props.message.reply && (
                <ReplyMessage
                  selectMessage={this.onPressSelectMessage}
                  photoURL={props.message.reply.photoURL}
                  closeButton={false}
                  message={props.message.reply.message}
                  title={props.message.reply.title}
                  titleColor={props.message.reply.titleColor}
                  messageTextColor={props.messageColor}
                />
              )}

              {props.message.type === 'text' && (
                <TextMessage
                  body={props.message.body}
                  position={props.message.position}
                  retracted={props.message.retracted}
                  messageTextColor={props.messageColor}
                />
              )}

              {props.message.type === 'photo' && (
                <PhotoMessage
                  id={props.message.id}
                  data={props.message.data}
                //  selectMessage={this.onPressSelectMessage}
                  //openMediaViewer={this.onOpenMediaViewer}
                  downloadFile={props.downloadFile}
                  messageTextColor={props.messageColor}
                />
              )}

              {props.message.type === 'video' && (
                <VideoMessage
                  message={props.message}
                //  selectMessage={this.onPressSelectMessage}
                  //openMediaViewer={this.onOpenMediaViewer}
                  downloadFile={props.downloadFile}
                  messageTextColor={props.messageColor}
                />
              )}

              {props.message.type === 'file' && (
                <FileMessage
                  id={props.message.id}
                  body={props.message.body}
                  data={props.message.data}
                  position={props.message.position}
                  //selectMessage={props.onPressSelectMessage}
                 // openFile={props.onOpenFile}
                  downloadFile={props.downloadFile}
                  messageTextColor={props.messageColor}
                />
              )}
              {props.message.type === 'meetingLink' && (
                <MeetingLink
                  meetingID={props.message.data.meetingID}
                  title={props.message.body}
                  message={props.message}
                  messageTextColor={props.messageColor}
                />
              )}
              {props.message.type === 'location' && (
                <LocationMessage
                  id={props.message.id}
                  data={props.message.data}
                  messageTextColor={props.messageColor}
                />
              )}
              {props.message.type === 'audio' && (
                <AudioMessage
                  key={props.message.id}
                  id={props.message.id}
                  position={props.message.position}
                  audioURL={props.message.data.audioURL}
                  duration={parseInt(props.message.data.duration || 0)}
                  messageTextColor={props.messageColor}
                />
              )} */}
              <View
                style={[
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    flex: 1,
                  },
                  props.message.type === 'text' && {
                    position: 'absolute',
                    right: 5,
                    bottom: 1,
                  },
                ]}>
                <Text
                  style={[
                    styles.chatTime,
                    props.message.type === 'text' && {
                      marginTop: -20,
                    },
                  ]}>
                  {/* {dateToFormat('HH:mm', props.message.date)} */}
                </Text>
                {/* {props.message.position === 'right' && props.message.retracted !== true && (
                  // <IconM
                  //   style={{
                  //     marginLeft: 4,
                  //     marginTop: message.type === 'text' ? -20 : undefined,
                  //   }}
                  //   type={'materialize'}
                  //   name={
                  //     (message.seen === 'seen' && 'done-all') ||
                  //     (message.sended === 'sended' && 'check') ||
                  //     (message.sended === 'forwarded' && 'done-all') ||
                  //     'access-time'
                  //   }
                  //   size={15}
                  //   color={message.seen === 'seen' ? '#4fc3f7' : '#d4d4d4'}
                  // />
                )} */}
              </View>
            </View>
          </View>

          {props.message.sended === 'notsended' && (
            <TouchableOpacity
              // onLongPress={this.onPressSelectMessage}
              style={
                props.message.selected === true
                  ? {display: 'none'}
                  : styles.messageSendingError
              }
              onPress={() => props.reSendMessage(props.message)}>
              {/* <Icon
                name="ban"
                size={12}
                style={{backgroundColor: 'transparent'}}
                color={'red'}
              /> */}
              <Text style={[styles.messageSendingErrorText, {color: 'red'}]}>
                {/* {i18n.get('could:not:send')} */}
              </Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MessageView;
