import React, {FC} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {IAudioMessageProps} from '../../../type';

const AudioMessage: FC<IAudioMessageProps> = (props: IAudioMessageProps) => {
  if (!props.audioURL) return <ActivityIndicator color="#ffffff" />;
  return (
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
      <View style={{marginRight: 5}}>
        {/* <Slider
          disabled={true}
          value={parseInt(state.playSeconds)}
          maximumValue={parseInt(state.duration)}
          maximumTrackTintColor={props.position === 'right' ? '#efefef' : '#555'}
          minimumTrackTintColor={props.position === 'right' ? '#efefef' : '#555'}
          thumbTintColor='black'
          style={{ minWidth: 150 }}
        /> */}
        {props.slider}
      </View>
      <View>{props.audioTime}</View>
    </View>
  );
};

export default AudioMessage;
