import React, {FC} from 'react';
import {Animated, TextInput, TouchableOpacity, View} from 'react-native';
import {IMessageSenderProps} from '../../type';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import ReplyMessage from '../Messages/ReplyMessage/ReplyMessage';
import styles from './messageSender-css';

const MessageSender: FC<IMessageSenderProps> = (props: IMessageSenderProps) => {
  const handleChange = (e: Event) => {
    if (e) {
      props.isAudioRecord = false;
    } else {
      props.isAudioRecord = true;
    }
  };
  return (
    <>
      <View style={[styles.footerArea]}>
        {props.isAudioRecord === false && (
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
                onChangeText={e => {
                  handleChange(e);
                  props.inputOnChangeText?.(e);
                }}
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
                {props.cameraIcon}
              </TouchableOpacity>
            </Animated.View>
            {props.sendableMessage ? (
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
                </TouchableOpacity>
              </Animated.View>
            ) : (
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
                  onPress={props.audioRecord.toggleAudioRecorder}>
                  {props.micIcon}
                </TouchableOpacity>
              </Animated.View>
            )}
          </>
        )}
        {props.isAudioRecord === true && (
          <Animated.View style={{opacity: props.recorderOpacity}}>
            <AudioRecorder
              chatId={props.audioRecord.chatId}
              toggleAudioRecorder={props.audioRecord.toggleAudioRecorder}
              recorded={props.audioRecord.recorded}
              recording={props.audioRecord.recording}
              duration={props.audioRecord.duration}
              startRecording={props.audioRecord.startRecording}
              beingRecorded={props.audioRecord.beingRecorded}
              recordingFinished={props.audioRecord.recordingFinished}
              safeCloseIcon={props.audioRecord.safeCloseIcon}
              stopRecordIcon={props.audioRecord.stopRecordIcon}
              startRecordIcon={props.audioRecord.startRecordIcon}
              sendRecordIcon={props.audioRecord.sendRecordIcon}
              recordTime={props.audioRecord.recordTime}
              onPressSafeClose={props.audioRecord.onPressSafeClose}
              onPressStopRecord={props.audioRecord.onPressStopRecord}
              onPressStartRecord={props.audioRecord.onPressStartRecord}
              onPressSendRecord={props.audioRecord.onPressSendRecord}
            />
          </Animated.View>
        )}
      </View>
    </>
  );
};

export default MessageSender;
