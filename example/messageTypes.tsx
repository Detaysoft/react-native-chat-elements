import React from 'react';
import {Image, Text} from 'react-native';
import {setData} from '../src/components/test';
import {MessageType} from '../src/type';

export const audioMessage: MessageType = {
  type: 'audio',
  audioURL: 'audio url',
  position: 'right',
  duration: 0,
  started: false,
  playIcon: <Text>pl</Text>,
  playState: 'paused',
  pauseIcon: <Text>pa</Text>,
  slider: <Text>slider</Text>,
  audioTime: <Text>15:03</Text>,
  onStartPlay: () => console.log('onstart'),
  onPausePlay: () => console.log('onpause'),
  onResumePlayer: () => console.log('onresume'),
  chatType: 'singlechat',
  reply: {},
  sended: 'forwarded',
  date: 'now',
  data: 'any',
  selected: false,
  retracted: false,
  forwarded: true,
  id: 'audio',
  notch: true,
  ownerId: 'string',
  receiveId: '',
  seen: 'string',
  seenUsers: [],
  messageColor: {
    backgroundColor: '#5ba7c5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
    paddingBottom: 8,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 6,
    retractedColor: '#fff',
  },
  sendStatusIcon: <Text>✓</Text>,
  reactions: [<Text>😀</Text>],
};
export const fileMessage: MessageType = {
  type: 'file',
  body: 'map',
  data: {
    size: 10,
    status: {click: false, loading: false, error: false, download: false},
  },
  downloadFile: () => console.log('download file'),
  downloadIcon: <Text>D</Text>,
  errorIcon: <Text>E</Text>,
  fileIcon: <Text>F</Text>,
  fileSizeConversion: () => '10',
  id: 'file',
  onPress: () => console.log('on press'),
  openFile: () => console.log('open file'),
  position: 'right',
  progress: <Text>progress</Text>,
  onLongPress: () => console.log('select message'),
  chatType: 'singlechat',
  reply: {},
  sended: 'forwarded',
  date: 'now',
  selected: false,
  retracted: false,
  forwarded: true,
  notch: true,
  ownerId: 'string',
  receiveId: '',
  seen: 'string',
  seenUsers: [],
  messageColor: {
    backgroundColor: '#5ba7c5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
    paddingBottom: 8,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 6,
    retractedColor: '#fff',
  },
  sendStatusIcon: <Text>✓</Text>,
  reactions: [<Text>🖖</Text>],
};
export const locationMessage: MessageType = {
  type: 'location',
  locationURL: () =>
    'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?',
  onPress: () => console.log('on press'),
  onLongPress: props => setData(props),
  chatType: 'singlechat',
  position: 'right',
  reply: {},
  sended: 'forwarded',
  date: 'now',
  data: 'any',
  selected: false,
  retracted: false,
  forwarded: true,
  id: 'location',
  notch: true,
  ownerId: 'string',
  receiveId: '',
  seen: 'string',
  seenUsers: [],
  messageColor: {
    backgroundColor: '#5ba7c5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
    paddingBottom: 8,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 6,
    retractedColor: '#fff',
  },
  sendStatusIcon: <Text>✓</Text>,
  reactions: [<Text>👻</Text>],
};
export const meetingMessage: MessageType = {
  avatarIcon: <Image source={require('../assets/download.png')} />,
  cancelSelect: () => console.log('cancel select'),
  dataSource: [],
  date: 'now',
  dateText: 'now',
  downloadFile: () => console.log('download file'),
  icon: <Text>Icon</Text>,
  onPressMeetingVideoLink: () => console.log('onPressMeetingVideoLink'),
  onPressTitle: () => console.log('onPressMeetingVideoLink'),
  onPressToggle: () => console.log('onPressMeetingVideoLink'),
  openFile: () => console.log('onPressMeetingVideoLink'),
  openImageViewer: () => console.log('onPressMeetingVideoLink'),
  reSendMessage: () => console.log('onPressMeetingVideoLink'),
  selectMessage: () => console.log('onPressMeetingVideoLink'),
  type: 'meeting',
  recordIcon: <Text>RI</Text>,
  subject: 'bensu',
  title: 'title',
  toggleElement: <Text>TE</Text>,
  state: {participants: '', toggle: false},
  chatType: 'singlechat',
  position: 'right',
  reply: {},
  sended: 'forwarded',
  data: 'any',
  selected: false,
  retracted: false,
  forwarded: true,
  id: 'meeting',
  notch: true,
  ownerId: 'string',
  receiveId: '',
  seen: 'string',
  seenUsers: [],
  messageColor: {
    backgroundColor: '#5ba7c5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
    paddingBottom: 8,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 6,
    retractedColor: '#fff',
  },
  sendStatusIcon: <Text>✓</Text>,
  reactions: [<Text>😡</Text>, <Text>👀</Text>, <Text>👋</Text>],
};
export const meetingLinkMessage: MessageType = {
  type: 'meetingLink',
  icon: <Text>icon</Text>,
  onPress: () => console.log('onpress'),
  title: 'kldnfve',
  chatType: 'singlechat',
  position: 'right',
  reply: {},
  sended: 'forwarded',
  date: 'now',
  data: 'any',
  selected: false,
  retracted: false,
  forwarded: true,
  id: 'meetingLink',
  notch: true,
  ownerId: 'string',
  receiveId: '',
  seen: 'string',
  seenUsers: [],
  messageColor: {
    backgroundColor: '#5ba7c5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
    paddingBottom: 8,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 6,
    retractedColor: '#fff',
  },
  sendStatusIcon: <Text>✓</Text>,
  reactions: [<Text>🥶</Text>],
};
export const photoMessage: MessageType = {
  type: 'photo',
  data: {
    status: {download: false, click: false, error: false, loading: false},
    uri: 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?',
  },
  downloadFile: () => console.log('download file'),
  downloadIcon: <Text>D</Text>,
  errorIcon: <Text>E</Text>,
  id: 'photo',
  openMediaViewer: () => console.log('open media viewer'),
  progress: <Text>progress</Text>,
  onLongPress: () => console.log('select message'),
  chatType: 'singlechat',
  position: 'right',
  reply: {},
  sended: 'forwarded',
  date: 'now',
  selected: false,
  retracted: false,
  forwarded: true,
  notch: true,
  ownerId: 'string',
  receiveId: '',
  seen: 'string',
  seenUsers: [],
  messageColor: {
    backgroundColor: '#5ba7c5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
    paddingBottom: 8,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 6,
    retractedColor: '#fff',
  },
  sendStatusIcon: <Text>✓</Text>,
  reactions: [<Text>🤖</Text>],
};
export const replyMessage: MessageType = {
  type: 'reply',
  closeButton: true,
  closeButtonIcon: <Text>CB</Text>,
  photoURL: require('../assets/download.png'),
  onLongPress: () => console.log('select message'),
  message: () => 'message',
  title: 'title',
  titleColor: 'red',
  chatType: 'singlechat',
  position: 'right',
  reply: {},
  sended: 'forwarded',
  date: 'now',
  data: 'any',
  selected: false,
  retracted: false,
  forwarded: true,
  id: 'reply',
  notch: true,
  ownerId: 'string',
  receiveId: '',
  seen: 'string',
  seenUsers: [],
  messageColor: {
    backgroundColor: '#5ba7c5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
    paddingBottom: 8,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 6,
    retractedColor: '#fff',
  },
  sendStatusIcon: <Text>✓</Text>,
  reactions: [<Text>👣</Text>],
};
export const systemMessage: MessageType = {
  type: 'system',
  date: () => '29 ağu pazartesi',
  chatType: 'singlechat',
  position: 'right',
  reply: {},
  sended: 'forwarded',
  data: 'any',
  selected: false,
  retracted: false,
  forwarded: true,
  id: 'system',
  notch: true,
  ownerId: 'string',
  receiveId: '',
  seen: 'string',
  seenUsers: [],
  messageColor: {
    backgroundColor: '#5ba7c5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
    paddingBottom: 8,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 6,
    retractedColor: '#fff',
  },
  sendStatusIcon: <Text>✓</Text>,
  reactions: [<Text>🙏</Text>],
};
export const textMessage: MessageType = {
  type: 'text',
  messageBody: () => <Text>wkndjk</Text>,
  body: 'kwefjkwn',
  chatType: 'singlechat',
  position: 'right',
  reply: {},
  sended: 'forwarded',
  date: 'now',
  data: 'any',
  selected: false,
  retracted: false,
  forwarded: true,
  id: 'text',
  notch: true,
  ownerId: 'string',
  receiveId: '',
  seen: 'string',
  seenUsers: [],
  messageColor: {
    backgroundColor: '#5ba7c5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
    paddingBottom: 8,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 6,
    retractedColor: '#fff',
  },
  sendStatusIcon: <Text>✓</Text>,
  reactions: [<Text>👀</Text>],
};
export const videoMessage: MessageType = {
  type: 'video',
  onPress: () => console.log('download file'),
  downloadIcon: <Text>DI</Text>,
  errorIcon: <Text>EI</Text>,
  message: {
    data: {
      thumbnailURL: require('../assets/kedi.mp4'),
      status: {
        click: false,
        loading: false,
        error: false,
        download: false,
      },
    },
    body: 'kedi.mp4',
  },
  onPressFile: () => console.log('on press file'),
  progress: <Text>P</Text>,
  onLongPress: () => console.log('select message'),
  videoPlayIcon: <Text>VPI</Text>,
  chatType: 'singlechat',
  position: 'right',
  reply: {},
  sended: 'forwarded',
  date: 'now',
  data: 'any',
  selected: false,
  retracted: false,
  forwarded: true,
  id: 'video',
  notch: true,
  ownerId: 'string',
  receiveId: '',
  seen: 'string',
  seenUsers: [],
  messageColor: {
    backgroundColor: '#5ba7c5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
    paddingBottom: 8,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 6,
    retractedColor: '#fff',
  },
  sendStatusIcon: <Text>✓</Text>,
  reactions: [<Text>🧠</Text>],
};
