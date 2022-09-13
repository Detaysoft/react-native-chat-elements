import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IMessageReactionProps} from '../../type';
import MessageView from '../MessageView/MessageView';
import styles from './messageReaction-css';

const MessageReaction: FC<IMessageReactionProps> = (
  props: IMessageReactionProps,
) => {
  return (
    <>
      <TouchableOpacity
        style={styles.messageReactionContainer}
        onPress={props.onPressShowMessageActions}>
        <View style={styles.body}>
          <View style={[styles.icons, styles.reaction]}>
            <Text>reactions</Text>
          </View>
          <MessageView {...props.data} />
          <View style={[styles.popup, styles.reaction]}>
            <Text>Popup</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MessageReaction;
