import React, {FC, useEffect, useRef} from 'react';
import {Animated, ScrollView, TouchableOpacity, View} from 'react-native';
import {IMessageReactionProps} from '../../type';
import MessageView from '../MessageView/MessageView';
import styles from './messageReaction-css';

const MessageReaction: FC<IMessageReactionProps> = (
  props: IMessageReactionProps,
) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const wave = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    // waveAnim();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };
  }, []);

  // const waveAnim = () => {
  //   props.icons?.map((icon, i) => {
  //     Animated.timing(wave, {
  //       toValue: (i + 1) * 10,
  //       duration: i * 100,
  //       useNativeDriver: true,
  //     }).start(() => wave.setValue(0));
  //   });
  // };

  return (
    <TouchableOpacity
      style={styles.messageReactionContainer}
      onPress={props.onPressShowMessageActions}>
      <Animated.View style={[styles.body, {opacity: fadeAnim}]}>
        <View style={[styles.icons, styles.reaction, props.iconStyle]}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{flexGrow: 0}}>
            {props.icons?.map((icon: JSX.Element, i: number) => (
              <TouchableOpacity key={i}>
                {/* <Animated.View style={{transform: [{translateY: wave}]}}> */}
                {icon}
                {/* </Animated.View> */}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={{transform: [{skewY: '180deg'}, {rotate: '180deg'}]}}>
          <MessageView {...props.data} />
        </View>
        <View style={[styles.action, styles.reaction]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flexGrow: 0}}>
            {props.actions?.map((icon: JSX.Element, i: number) => (
              <TouchableOpacity key={i}>{icon}</TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default MessageReaction;
