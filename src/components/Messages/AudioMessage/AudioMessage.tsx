import React, {FC} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {IAudioMessageProps} from '../../../type';

const AudioMessage: FC<IAudioMessageProps> = (props: IAudioMessageProps) => {
  if (!props.audioURL) return <ActivityIndicator color="#ffffff" />;
  return (
    <TouchableOpacity onLongPress={props.onLongPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 2,
          marginTop: 1,
          minWidth: 250,
        }}>
        <View style={{marginRight: 5}}>
          {props.started === false && (
            <TouchableOpacity onPress={props.onStartPlay}>
              {props.playIcon}
            </TouchableOpacity>
          )}
          {props.playState === 'playing' && props.started === true && (
            <TouchableOpacity onPress={props.onPausePlay}>
              {props.pauseIcon}
            </TouchableOpacity>
          )}
          {props.playState === 'paused' && props.started === true && (
            <TouchableOpacity onPress={props.onResumePlayer}>
              {props.playIcon}
            </TouchableOpacity>
          )}
        </View>
        <View style={{marginRight: 5}}>{props.slider}</View>
        <View>{props.audioTime}</View>
      </View>
    </TouchableOpacity>
  );
};

export default AudioMessage;
