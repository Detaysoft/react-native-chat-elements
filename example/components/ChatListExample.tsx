import React from 'react';
import {Text} from 'react-native';
import {ChatList} from '../../src/components';

type Props = {};

const ChatListExample = (props: Props) => {
  return (
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
          photo: require('../../assets/download.png'),
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
          photo: require('../../assets/download.png'),
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
          photo: require('../../assets/download.png'),
          platform: null,
          status: '#fff',
          type: 'single',
        },
      ]}
    />
  );
};

export default ChatListExample;
