import React, {FC} from 'react';
import {Animated, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {IMessageSenderProps} from '../../type';
import CustomActionSheet from '../CustomActionSheet';
import ReplyMessage from '../MessageTypes/ReplyMessage';
import styles from './messageSender-css';

const MessageSender: FC<IMessageSenderProps> = (props: IMessageSenderProps) => {
  return (
    <>
      <View style={[styles.footerArea]}>
        {props.recordAudio === false && (
          <>
            <View style={{width: 50}} />
            <Animated.View
              style={[styles.messageInputArea, props.messageInputAreaStyle]}>
              {props.replyMessage && (
                <ReplyMessage
                  photoURL={props.replyMessage.photoURL}
                  title={props.replyMessage.title}
                  closeButton={props.replyMessage.closeButton}
                  titleColor={props.replyMessage.titleColor}
                  message={props.replyMessage.message}
                />
              )}
              <TextInput
                ref={r => (props.textInputRef = r)}
                style={[styles.messageInput, props.messageInputStyle]}
                placeholder={props.inputPlaceholder}
                placeholderTextColor={props.inputPlaceholderTextColor}
                underlineColorAndroid={props.inputUnderLineColorAndroid}
                multiline={props.inputMultiLine}
                maxLength={props.inputMaxLength}
                onContentSizeChange={props.inputOnContentSizeChange}
                onChangeText={props.inputOnChangeText}
                onChange={props.inputOnChange}
              />
            </Animated.View>
            <TouchableOpacity
              style={[
                styles.transparentButton,
                styles.alignBottom,
                {
                  borderRadius: 50,
                  marginLeft: 10,
                  height: 34,
                  width: 34,
                  bottom: 18,
                  left: 5,
                  backgroundColor: '#50afce',
                  position: 'absolute',
                },
              ]}
              onPress={props.onActionSheet}>
              {props.actionSheetIcon}
            </TouchableOpacity>

            <Animated.View
              style={{
                opacity: props.opacityShow,
                borderRadius: 50,
                marginLeft: 30,
                height: 34,
                width: 34,
                bottom: 18,
                left: 28,
                backgroundColor: '#50afce',
                position: 'absolute',
              }}>
              <TouchableOpacity
                style={[
                  styles.transparentButton,
                  styles.alignBottom,
                  {
                    borderRadius: 50,
                    marginLeft: 0,
                    height: 34,
                    width: 34,
                    bottom: 0,
                    left: 0,
                    backgroundColor: '#50afce',
                  },
                ]}
                onPress={() => props.sendPhoto?.('shot')}>
                {/* <IconE name="camera" size={28} color={'white'} /> */}
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={{
                opacity: props.opacityHide,
                height: 40,
                width: 30,
                position: 'absolute',
                right: 10,
                bottom: 10,
              }}>
              <TouchableOpacity
                style={[styles.transparentButton, styles.alignBottom]}
                onPress={props.onSendMessage}>
                {props.sendMessageIcon}
                {/* <IconM name="send" size={28} color={'#50afce'} /> */}
              </TouchableOpacity>
            </Animated.View>
            {!props.sendableMessage && (
              <Animated.View
                style={{
                  opacity: props.opacityShow,
                  height: 40,
                  width: 30,
                  position: 'absolute',
                  right: 10,
                  bottom: 10,
                }}>
                <TouchableOpacity
                  style={[styles.transparentButton, styles.alignBottom]}
                  onPress={props.toggleAudioRecorder}>
                  {/* <IconM name="mic" size={28} color={'#50afce'} /> */}
                </TouchableOpacity>
              </Animated.View>
            )}
          </>
        )}
        <CustomActionSheet
          title={props.actionSheet.title}
          options={props.actionSheet.options}
          cancelButtonIndex={props.actionSheet.cancelButtonIndex}
          destructiveButtonIndex={props.actionSheet.destructiveButtonIndex}
          onPress={props.actionSheet.onPress}
        />
        {/* {this.state.recordAudio === true && (
          <Animated.View style={{opacity: this.state.recorderOpacity}}>
            <AudioRecorder
              chatId={props.id}
              toggleAudioRecorder={this.toggleAudioRecorder}
            />
          </Animated.View>
        )} */}
      </View>
    </>
  );
};

export default MessageSender;
