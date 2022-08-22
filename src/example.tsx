import React from 'react';
import {Avatar, ChatButton} from './components';

const components = {
  avatar: <Avatar />,
  chatButton: (
    <ChatButton
      title="deneme"
      contentStyle={{
        color: 'red',
        backgroundColor: 'yellow',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
      }}
      // onlyView={true}
      onPress={() => {
        console.log('click');
      }}
    />
  ),
};

export default components;
