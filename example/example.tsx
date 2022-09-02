import React from 'react';
import {Text, View} from 'react-native';
import {
  Avatar,
  Popup,
  ChatList,
  MessageList,
  MessageSender,
} from '../src/components';

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
        style: {
          position: 'absolute',
          top: 50,
          right: 40,
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
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <MessageList
        id="string"
        noMoreMessages="string"
        endOfMam={false}
        mamLoading={false}
        messageList={[
          {
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
            id: '',
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
              marginLeft: '10%',
              marginTop: 3,
              paddingBottom: 8,
              paddingLeft: 9,
              paddingRight: 9,
              paddingTop: 6,
              retractedColor: '#fff',
            },
            sendStatusIcon: <Text>✓</Text>,
          },
        ]}
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
        inputPlaceholder=""
        inputPlaceholderTextColor="red"
        inputUnderLineColorAndroid=""
        inputMultiLine={true}
        inputMaxLength={10}
        opacityShow={10}
        opacityHide={1}
        // actionSheetIcon={<Text>A</Text>}
        sendMessageIcon={<Text>Send</Text>}
        sendableMessage={true}
        actionSheet={{options: []}}
        inputOnContentSizeChange={() => console.log('')}
        inputOnChangeText={() => console.log()}
        inputOnChange={() => console.log()}
        onActionSheet={() => console.log()}
        sendPhoto={() => console.log()}
        onSendMessage={() => console.log()}
        toggleAudioRecorder={() => console.log()}
      />
    </View>
  ),
};

export default components;
