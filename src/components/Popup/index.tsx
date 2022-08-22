import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {IPopupProps} from '../../type';
import ChatButton from '../ChatButton';
import styles from './popup-css';

const Popup: FC<IPopupProps> = (props: IPopupProps) => {
  return (
    <View style={styles.container}>
      {props.source && (
        <Image source={props.source} style={[styles.image, props.imageStyle]} />
      )}
      <View style={styles.content}>
        <Text style={[styles.contentTitle, props.titleStyle]}>
          {props.title}
        </Text>
        <Text style={[styles.contentText, props.textStyle]}>{props.text}</Text>
      </View>
      <ChatButton
        icon={props.button.icon}
        iconColor={props.button.iconColor}
        iconSize={props.button.iconSize}
        iconFamily={props.button.iconFamily}
        title={props.button.title}
        onPress={props.button.onPress}
        style={[props.button.style, styles.button]}
        contentStyle={props.button.contentStyle}
      />
    </View>
  );
};

export default Popup;
