import React from 'react';
import {Animated, Text, View} from 'react-native';
import {
  Avatar,
  Popup,
  ChatList,
  MessageList,
  MessageSender,
  CustomActionSheet,
} from '../src/components';
import {MessageType} from '../src/type';
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
} from './messageTypes';

const components = {
  avatar: <Avatar source={require('../assets/download.png')} />,
  popup: (
    <Popup
      source={require('../assets/calendar.jpg')}
      title={'title'}
      text={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua'
      }
      buttonTitle="got it"
      button={{
        title: 'show popup',
        contentStyle: {
          backgroundColor: 'blue',
          color: 'white',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          fontSize: 16,
        },
        onPress: () => {
          console.log('popup clicked');
        },
      }}
    />
  ),
  chatList: (
    <ChatList
      emptyChatText="Konuşma listeniz boş."
      messageRenderer={() => [
        <Text numberOfLines={1} ellipsizeMode="tail">
          apple banana cancel apple banana cancel apple banana cancel
        </Text>,
      ]}
      dateCustomFormat={() => 'right now'}
      subtitleStatusFunc={() => <Text>✓</Text>}
      dataSource={[
        {
          date: Object,
          id: '2263',
          inUnseen: 5,
          lastMessage: 'aynen',
          lastMessageStatus: undefined,
          name: 'Şerife Sarıkaya',
          photo: require('../assets/download.png'),
          platform: null,
          status: '#fff',
          type: 'single',
        },
        {
          date: Object,
          id: '476',
          inUnseen: 5,
          lastMessage:
            '# Reset metro bundler cache : `npx react-native start --reset-cache` # Remove Android assets cache : `cd android && ./gradlew clean` # Relaunch metro server : `npx react-native run-android`',
          lastMessageStatus: undefined,
          name: 'Esranur Çoşkun Hıdıroğlu',
          photo: require('../assets/download.png'),
          platform: null,
          status: '#fff',
          type: 'single',
        },
        {
          date: Object,
          id: '458',
          inUnseen: 5,
          lastMessage:
            'git remote add origin https://.....git git push -u origin --all git push -u origin --tags',
          lastMessageStatus: undefined,
          name: 'Emre Güdür',
          photo: require('../assets/download.png'),
          platform: null,
          status: '#fff',
          type: 'single',
        },
      ]}
    />
  ),
  messageList: (
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
  ),
};

var messages: any = [];
const addMessage = () => {
  const randomNumber = Math.floor((Math.random() * 10) % 10);
  console.log(randomNumber);

  switch (randomNumber) {
    case 0:
      messages.push(audioMessage);
      break;
    case 1:
      messages.push(fileMessage);
      break;
    case 2:
      messages.push(locationMessage);
      break;
    case 3:
      messages.push(meetingMessage);
      break;
    case 4:
      messages.push(meetingLinkMessage);
      break;
    case 5:
      messages.push(photoMessage);
      break;
    case 6:
      messages.push(replyMessage);
      break;
    case 7:
      messages.push(systemMessage);
      break;
    case 8:
      messages.push(textMessage);
      break;
    case 9:
      messages.push(videoMessage);
      break;
    default:
      break;
  }
};
export default components;
