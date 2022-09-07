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

type Props = {};

const MessageListExample = (props: Props) => {
  const [messages, setMessages] = useState<any>([]);
  const addMessage = () => {
    const randomNumber = Math.floor((Math.random() * 10) % 10);
    console.log(randomNumber);

    switch (randomNumber) {
      case 0:
        setMessages([...messages, setMessages(audioMessage)]);
        break;
      case 1:
        setMessages([...messages, setMessages(fileMessage)]);
        break;
      case 2:
        setMessages([...messages, setMessages(locationMessage)]);
        break;
      case 3:
        setMessages([...messages, setMessages(meetingMessage)]);
        break;
      case 4:
        setMessages([...messages, setMessages(meetingLinkMessage)]);
        break;
      case 5:
        setMessages([...messages, setMessages(photoMessage)]);
        break;
      case 6:
        setMessages([...messages, setMessages(replyMessage)]);
      case 7:
        setMessages([...messages, setMessages(systemMessage)]);
        break;
      case 8:
        setMessages([...messages, setMessages(textMessage)]);
        break;
      case 9:
        setMessages([...messages, setMessages(videoMessage)]);
        break;
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
        messageList={messages}
        onLoading={() => console.log('')}
        reSendMessage={() => console.log('')}
        downloadFile={() => console.log('')}
        onMessageSelect={() => console.log('')}
        openFile={() => console.log('')}
        openMediaViewer={() => console.log('')}
        onScroll={() => console.log('')}
      />
      <MessageSender
        id="string"
        type=""
        recordAudio={false}
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
        inputOnContentSizeChange={() => console.log()}
        inputOnChangeText={() => console.log()}
        inputOnChange={() => console.log()}
        onActionSheet={() => console.log()}
        sendPhoto={() => console.log()}
        onSendMessage={() => addMessage()}
        toggleAudioRecorder={() => console.log()}
      />
    </View>
  );
};

export default MessageListExample;
