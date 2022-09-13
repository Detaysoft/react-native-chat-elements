import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {IMessageReactionProps} from '../../type';
import MessageView from '../MessageView/MessageView';

const MessageReaction: FC<IMessageReactionProps> = (
  props: IMessageReactionProps,
) => {
  return (
    <>
      <TouchableOpacity
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'rgba(52, 52, 52, 0.6)',
        }}
        onPress={props.onPressShowMessageActions}>
        <View
          style={{
            transform: [{skewY: '180deg'}, {rotate: '180deg'}],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60%',
          }}>
          <MessageView {...props.data} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MessageReaction;
