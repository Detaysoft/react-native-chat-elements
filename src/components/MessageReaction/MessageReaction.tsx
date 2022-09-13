import React, {FC, useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {IMessageReactionProps} from '../../type';
import MessageView from '../MessageView/MessageView';
import styles from './messageReaction-css';

const MessageReaction: FC<IMessageReactionProps> = (
  props: IMessageReactionProps,
) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    };
  }, []);

  return (
    <>
      <TouchableOpacity
        style={styles.messageReactionContainer}
        onPress={props.onPressShowMessageActions}>
        <Animated.View style={[styles.body, {opacity: fadeAnim}]}>
          <View style={[styles.icons, styles.reaction, props.iconStyle]}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text>👍</Text>
              <Text>❤️</Text>
              <Text>😂</Text>
              <Text>😶</Text>
              <Text>😅</Text>
              <Text>🙏</Text>
            </View>
          </View>
          <View style={{transform: [{skewY: '180deg'}, {rotate: '180deg'}]}}>
            <MessageView {...props.data} />
          </View>
          <View style={[styles.popup, styles.reaction]}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Text>⬅️ yanıtla</Text>
              <Text>➡️ ilet</Text>
              <Text>🗑️ sil</Text>
              <Text>📋 kopyala</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};

export default MessageReaction;
