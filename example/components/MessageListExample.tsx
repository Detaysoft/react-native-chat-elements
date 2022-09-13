import React, {useState} from 'react';
import {Animated, Text, View} from 'react-native';
import {
  CustomActionSheet,
  MessageList,
  MessageSender,
} from '../../src/components';
import {
  audioMessage,
  fileMessage,
  locationMessage,
  meetingLinkMessage,
  meetingMessage,
  photoMessage,
  replyMessage,
  systemMessage,
  textMessage,
  videoMessage,
} from '../messageTypes';

const MessageListExample = () => {
  const [message, setMessage] = useState<string>('');
  const [messageListArray, setMessageListArray] = useState<any>([]);
  const addMessage = () => {
    const randomNumber = Math.floor((Math.random() * 10) % 10);

    switch (randomNumber) {
      case 0:
        setMessage('audioMessage');
        break;
      case 1:
        setMessage('fileMessage');
        break;
      case 2:
        setMessage('locationMessage');
        break;
      case 3:
        setMessage('meetingMessage');
        break;
      case 4:
        setMessage('meetingLinkMessage');
        break;
      case 5:
        setMessage('photoMessage');
        break;
      case 6:
        setMessage('replyMessage');
        break;
      case 7:
        setMessage('systemMessage');
        break;
      case 8:
        setMessage('textMessage');
        break;
      case 9:
        setMessage('videoMessage');
      default:
        setMessage('meetingMessage');
        break;
    }
    setMessageListArray([...messageListArray, randomMessage(message)]);
  };
  const randomMessage = (type: string) => {
    switch (type) {
      case 'audioMessage':
        return audioMessage;
      case 'fileMessage':
        return fileMessage;
      case 'locationMessage':
        return locationMessage;
      case 'location':
        return locationMessage;
      case 'meetingMessage':
        return meetingMessage;
      case 'meetingLinkMessage':
        return meetingLinkMessage;
      case 'photoMessage':
        return photoMessage;
      case 'replyMessage':
        return replyMessage;
      case 'systemMessage':
        return systemMessage;
      case 'textMessage':
        return textMessage;
      case 'videoMessage':
        return videoMessage;
      default:
        break;
    }
  };
  return (
    <View
      style={{
        marginBottom: 80,
      }}>
      <MessageList
        id="string"
        noMoreMessages="string"
        endOfMam={false}
        mamLoading={false}
        messageList={messageListArray}
        onLoading={() => console.log('onLoading')}
        reSendMessage={() => console.log('reSendMessage')}
        downloadFile={() => console.log('downloadFile')}
        onMessageSelect={() => console.log('onMessageSelect')}
        openFile={() => console.log('openFile')}
        openMediaViewer={() => console.log('openMediaViewer')}
        onScroll={() => console.log('onScroll')}
      />
      <MessageSender
        id="string"
        type=""
        isAudioRecord={false}
        messageInputAreaStyle={{}}
        //  replyMessage={{}}
        textInputRef="React.LegacyRef"
        messageInputStyle={{}}
        inputPlaceholder="bir şeyler yaz"
        inputPlaceholderTextColor="#bdbdbd"
        inputUnderLineColorAndroid="transparent"
        inputMultiLine={true}
        inputMaxLength={30}
        opacityShow={new Animated.Value(1)}
        recorderOpacity={new Animated.Value(1)}
        //  opacityHide={new Animated.Value(0)}
        actionSheetIcon={
          <CustomActionSheet
            button={{
              title: '➕',
              contentStyle: {
                backgroundColor: 'transparent',
                color: 'white',
              },
            }}
            title="Which one do you like ?"
            options={['Apple', 'Banana', 'cancel']}
            cancelButtonIndex={2}
            destructiveButtonIndex={2}
            onPress={index => console.log('action sheet', index)}
          />
        }
        sendMessageIcon={<Text style={{}}>📡</Text>}
        micIcon={<Text>🎙️</Text>}
        cameraIcon={<Text>📷</Text>}
        sendableMessage={true}
        inputOnContentSizeChange={() => console.log('inputOnContentSizeChange')}
        inputOnChangeText={() => console.log('inputOnChangeText')}
        inputOnChange={() => console.log('inputOnChange')}
        onActionSheet={() => console.log('onActionSheet')}
        sendPhoto={() => console.log('sendPhoto')}
        onSendMessage={() => addMessage()}
        audioRecord={{
          chatId: 'jqnka',
          toggleAudioRecorder: () => console.log('toggleAudioRecorder'),
          recorded: false,
          recording: false,
          duration: 0,
          startRecording: 'startRecording',
          beingRecorded: 'beingRecorded',
          recordingFinished: 'recorded',
          safeCloseIcon: <Text>X</Text>,
          stopRecordIcon: <Text>D</Text>,
          startRecordIcon: <Text>B</Text>,
          sendRecordIcon: <Text>G</Text>,
          recordTime: <Text>00:00</Text>,
          onPressSafeClose: () => console.log('onPressSafeClose'),
          onPressStopRecord: () => console.log('onPressStopRecord'),
          onPressStartRecord: () => console.log('onPressStartRecord'),
          onPressSendRecord: () => console.log('onPressSendRecord'),
        }}
      />
    </View>
  );
};

export default MessageListExample;
