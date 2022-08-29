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
      body="map"
      data={{size: 10, status: {click: '', loading: '', error: ''}}}
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
      selectMessage={() => console.log('select message')}
    />
  ),
  locationMessage: (
    <MessageTypes.LocationMessage
      locationURL={() =>
        'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?'
      }
      onPress={() => console.log('on press')}
      selectMessage={() => console.log('select message')}
    />
  ),
  photoMessage: (
    <MessageTypes.PhotoMessage
      data={{
        status: {download: '', click: '', error: '', loading: ''},
        uri: 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?',
      }}
      downloadFile={() => console.log('download file')}
      downloadIcon={<Text>D</Text>}
      errorIcon={<Text>E</Text>}
      id="10"
      openMediaViewer={() => console.log('open media viewer')}
      progress={<Text>progress</Text>}
      selectMessage={() => console.log('select message')}
    />
  ),
  replyMessage: (
    <MessageTypes.ReplyMessage
      closeButton={true}
      closeButtonIcon={<Text>CB</Text>}
      photoURL={require('../assets/download.png')}
      selectMessage={() => console.log('select message')}
      message={() => 'message'}
      title="title"
      titleColor="red"
    />
  ),
};

export default components;
