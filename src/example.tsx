import React from 'react';
import {Text, View} from 'react-native';
import {
  Avatar,
  ChatButton,
  Popup,
  CustomActionSheet,
  ChatListItem,
  ChatList,
  MessageTypes,
  MessageView,
  MessageList,
  MessageSender,
} from './components';

const components = {
  avatar: <Avatar source={require('../assets/download.png')} />,
  chatButton: (
    <ChatButton
      // title="deneme"
      contentStyle={{
        color: 'red',
        backgroundColor: 'yellow',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
      }}
      icon={<Text>wkenfk</Text>}
      // onlyView={true}
      onPress={() => {
        console.log('click');
      }}
    />
  ),
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
  customActionSheet: (
    <CustomActionSheet
      button={{title: 'Open ActionSheet'}}
      title="Which one do you like ?"
      options={['Apple', 'Banana', 'cancel']}
      cancelButtonIndex={2}
      destructiveButtonIndex={2}
      onPress={index => console.log(index)}
    />
  ),
  chatItem: (
    <ChatListItem
      badge={1}
      date="now"
      title="bensu"
      listType="chatList"
      subtitleStatus="✓"
      noImage={false}
      avatar={require('../assets/calendar.jpg')}
      type={'single'}
      messageRenderer={() => [
        <Text>Apple Banana cancel Apple Banana cancel</Text>,
      ]}
      dateCustomFormat={() => 'right now'}
      subtitleStatusFunc={item => <Text>{item}</Text>}
      onPress={() => console.log('handle on press')}
      onLongPress={() => console.log('handle on long press')}
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
  audioMessage: (
    <MessageTypes.AudioMessage
      type="audio"
      audioURL={'audio url'}
      position={'right'}
      duration={0}
      started={false}
      playIcon={<Text>pl</Text>}
      playState={'paused'}
      pauseIcon={<Text>pa</Text>}
      slider={<Text>slider</Text>}
      audioTime={<Text>15:03</Text>}
      onStartPlay={() => console.log('onstart')}
      onPausePlay={() => console.log('onpause')}
      onResumePlayer={() => console.log('onresume')}
    />
  ),
  fileMessage: (
    <MessageTypes.FileMessage
      type="file"
      body="map"
      data={{
        size: 10,
        status: {click: false, loading: false, error: false, download: false},
      }}
      downloadFile={() => console.log('download file')}
      downloadIcon={<Text>D</Text>}
      errorIcon={<Text>E</Text>}
      fileIcon={<Text>F</Text>}
      fileSizeConversion={() => '10'}
      id="1"
      onPress={() => console.log('on press')}
      openFile={() => console.log('open file')}
      position="right"
      progress={<Text>progress</Text>}
      onLongPress={() => console.log('select message')}
    />
  ),
  locationMessage: (
    <MessageTypes.LocationMessage
      type="location"
      locationURL={() =>
        'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?'
      }
      onPress={() => console.log('on press')}
      onLongPress={() => console.log('select message')}
    />
  ),
  meetingMessage: (
    <MessageTypes.MeetingMessage
      avatarIcon={<Text>AI</Text>}
      cancelSelect={() => console.log('cancel select')}
      dataSource={[]}
      date="date"
      dateText="date"
      downloadFile={() => console.log('download file')}
      icon={<Text>I</Text>}
      onPressMeetingVideoLink={() => console.log('onPressMeetingVideoLink')}
      onPressTitle={() => console.log('onPressMeetingVideoLink')}
      onPressToggle={() => console.log('onPressMeetingVideoLink')}
      openFile={() => console.log('onPressMeetingVideoLink')}
      openImageViewer={() => console.log('onPressMeetingVideoLink')}
      reSendMessage={() => console.log('onPressMeetingVideoLink')}
      selectMessage={() => console.log('onPressMeetingVideoLink')}
      type="meeting"
      recordIcon={<Text>RI</Text>}
      subject="subject"
      title="title"
      toggleElement={<Text>TE</Text>}
      state={{participants: '', toggle: false}}
    />
  ),
  meetingLinkMessage: (
    <MessageTypes.MeetingLinkMessage
      type="meetingLink"
      icon={<Text>icon</Text>}
      onPress={() => console.log('onpress')}
      title="kldnfve"
    />
  ),
  photoMessage: (
    <MessageTypes.PhotoMessage
      type="photo"
      data={{
        status: {download: false, click: false, error: false, loading: false},
        uri: 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?',
      }}
      downloadFile={() => console.log('download file')}
      downloadIcon={<Text>D</Text>}
      errorIcon={<Text>E</Text>}
      id="10"
      openMediaViewer={() => console.log('open media viewer')}
      progress={<Text>progress</Text>}
      onLongPress={() => console.log('select message')}
    />
  ),
  replyMessage: (
    <MessageTypes.ReplyMessage
      type="reply"
      closeButton={true}
      closeButtonIcon={<Text>CB</Text>}
      photoURL={require('../assets/download.png')}
      onLongPress={() => console.log('select message')}
      message={() => 'message'}
      title="title"
      titleColor="red"
    />
  ),
  systemMessage: (
    <MessageTypes.SystemMessage type="system" date={() => '29 ağu pazartesi'} />
  ),
  textMessage: (
    <MessageTypes.TextMessage
      type="text"
      messageBody={() => <Text>wkndjk</Text>}
      body="kwefjkwn"
    />
  ),
  videoMessage: (
    <MessageTypes.VideoMessage
      type="video"
      onPress={() => console.log('download file')}
      downloadIcon={<Text>DI</Text>}
      errorIcon={<Text>EI</Text>}
      message={{
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
      }}
      onPressFile={() => console.log('on press file')}
      progress={<Text>P</Text>}
      onLongPress={() => console.log('select message')}
      videoPlayIcon={<Text>VPI</Text>}
    />
  ),
  messageView: (
    <>
      <MessageView
        type="meetingLink"
        icon={<Text>icon</Text>}
        onPress={() => console.log('onpress')}
        title="kldnfve"
        sendStatusIcon={<Text>✓</Text>}
        date="right now"
        position="right"
        chatType="singlechat"
        messageColor={{
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
        }}
      />
      <MessageView
        type="meetingLink"
        icon={<Text>icon</Text>}
        onPress={() => console.log('onpress')}
        title="kldnfve"
        sendStatusIcon={<Text>✓</Text>}
        date="right now"
        position="right"
        chatType="singlechat"
        messageColor={{
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
        }}
      />
    </>
  ),
  messageList: (
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
  ),
  messageSender: (
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
  ),
};

export default components;
