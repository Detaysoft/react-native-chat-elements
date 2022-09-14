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
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
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
            {props.icons}
          </View>
          <View style={{transform: [{skewY: '180deg'}, {rotate: '180deg'}]}}>
            <MessageView {...props.data} />
          </View>
          <View style={[styles.action, styles.reaction]}>{props.actions}</View>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};

export default MessageReaction;
