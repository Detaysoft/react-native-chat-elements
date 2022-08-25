import React, {FC} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {IAudioMessageProps} from '../../type';

const AudioMessage: FC<IAudioMessageProps> = (props: IAudioMessageProps) => {
  // setAudio() {
  //   if (!this.props.audioURL) return
  //   this.soundPlayer = new Sound(this.props.audioURL, undefined, error => {
  //     if (error) {
  //       console.log('failed to load the sound', error)
  //       return
  //     }
  //   })
  // }

  // onSliderEditStart() {
  //   this.state.sliderEditing = true
  //   this.setState(this.state)
  // }

  // async onSliderEditEnd() {
  //   this.setState({
  //     playSeconds: this.sliderEditedValue || 0,
  //     sliderEditing: false
  //   })

  //   this.soundPlayer.setCurrentTime(this.sliderEditedValue)
  //   clearInterval(this.interval)
  //   this.loadInterval()
  //   this.soundPlayer.play(this.playerCallback)
  // }

  // onSliderEditing(value) {
  //   this.soundPlayer.pause()
  //   this.sliderEditedValue = Math.round(value)
  // }

  // playerCallback() {
  //   console.log('callback')
  //   clearInterval(this.interval)
  //   this.setState({
  //     playSeconds: 0,
  //     playState: 'paused',
  //     started: false,
  //     sliderEditing: false
  //   })
  // }

  // loadInterval() {
  //   this.interval = setInterval(() => {
  //     if (this.state.sliderEditing === false && this.state.playState === 'playing')
  //       this.setState({
  //         playSeconds: this.state.playSeconds + 100,
  //         duration: this.soundPlayer.getDuration() * 1000
  //       })
  //   }, 100)
  // }

  // async onStartPlay() {
  //   // GLOBALS.promise.view.emit('refreshPlayers')

  //   if (!this.props.audioURL) return

  //   this.setState({
  //     playSeconds: 0,
  //     playState: 'playing',
  //     started: true
  //   })

  //   this.loadInterval()
  //   this.soundPlayer.play(this.playerCallback)
  // }

  // async onResumePlayer() {
  //   this.setState({
  //     playState: 'playing'
  //   })

  //   clearInterval(this.interval)
  //   this.loadInterval()
  //   this.soundPlayer.play(this.playerCallback)
  // }

  // async onPausePlay() {
  //   this.soundPlayer.pause()
  //   this.setState({
  //     playState: 'paused'
  //   })
  // }

  // async onStopPlay() {
  //   this.soundPlayer.stop(() => {
  //     clearInterval(this.interval)
  //     this.setState({
  //       playState: 'paused',
  //       playSeconds: 0,
  //       started: false
  //     })
  //   })
  // }
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
            {/* <Icon
              style={{ fontSize: 34 }}
              name='play-circle'
              color={props.position === 'right' ? '#efefef' : style.receivedMessageColor}
            /> */}
            {props.playIcon}
          </TouchableOpacity>
        )}
        {props.playState === 'playing' && props.started === true && (
          <TouchableOpacity onPress={props.onPausePlay}>
            {/* <Icon
              style={{ fontSize: 34 }}
              name='pause-circle'
              color={props.position === 'right' ? '#efefef' : style.receivedMessageColor}
            /> */}
            {props.pauseIcon}
          </TouchableOpacity>
        )}
        {props.playState === 'paused' && props.started === true && (
          <TouchableOpacity onPress={props.onResumePlayer}>
            {/* <Icon style={{ fontSize: 34 }} name='play-circle' color={props.position === 'right' ? '#efefef' : '#555'} /> */}
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
