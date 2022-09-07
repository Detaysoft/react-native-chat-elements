import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IChatButtonProps} from '../../type';
import styles from './chatButton-css';

const ChatButton: FC<IChatButtonProps> = (props: IChatButtonProps) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.onlyView ? (
        props.icon ? (
          <View style={[props.iconColor, props.iconSize, props.iconFamily]}>
            {props.icon}
          </View>
        ) : (
          <Text style={[styles.defaultStyle, props.contentStyle]}>
            {props.title}
          </Text>
        )
      ) : (
        <TouchableOpacity onPress={props.onPress} style={[styles.container]}>
          {props.icon ? (
            <View style={[props.iconColor, props.iconSize, props.iconFamily]}>
              {props.icon}
            </View>
          ) : (
            <Text style={[styles.defaultStyle, props.contentStyle]}>
              {props.title}
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ChatButton;
