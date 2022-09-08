import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IAudioRecorderProps} from '../../type';
import styles from './audioRecorder-css';

const AudioRecorder: FC<IAudioRecorderProps> = (props: IAudioRecorderProps) => {
  return (
    <View style={[styles.messageInputArea]}>
      <View style={styles.recordInfo}>
        <TouchableOpacity
          style={[
            styles.transparentButton,
            styles.alignBottom,
            {
              marginRight: 10,
            },
          ]}
          onPress={props.onPressSafeClose}>
          {props.safeCloseIcon}
        </TouchableOpacity>
        {props.recording === true && props.recorded === false && (
          <TouchableOpacity
            style={[
              styles.transparentButton,
              styles.alignBottom,
              {
                marginRight: 10,
              },
            ]}
            onPress={props.onPressStopRecord}>
            {props.stopRecordIcon}
          </TouchableOpacity>
        )}
        {props.recording === false && props.recorded === false && (
          <TouchableOpacity
            style={[
              styles.transparentButton,
              styles.alignBottom,
              {
                marginRight: 10,
              },
            ]}
            onPress={props.onPressStartRecord}>
            {props.startRecordIcon}
          </TouchableOpacity>
        )}
        <Text>
          {props.recorded === false &&
            props.recording === false &&
            props.duration === 0 &&
            props.startRecording}
          {props.recording === true &&
            props.recorded === false &&
            props.beingRecorded}
          {props.recorded === true &&
            props.recording === false &&
            props.recording === false &&
            props.recordingFinished}
        </Text>
      </View>
      <View>{props.recordTime}</View>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={[styles.transparentButton, styles.alignBottom]}
          onPress={props.onPressSendRecord}>
          {props.sendRecordIcon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AudioRecorder;
