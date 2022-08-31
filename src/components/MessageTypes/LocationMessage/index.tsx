import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ILocationMessageProps} from '../../../type';
import styles from './locationMessage-css';

const LocationMessage: FC<ILocationMessageProps> = (
  props: ILocationMessageProps,
) => {
  return (
    <TouchableOpacity
      onLongPress={props.selectMessage}
      style={props.style}
      onPress={props.onPress}>
      <Image
        style={[styles.chatMessageImage, props.imageStyle]}
        source={{
          uri: props.locationURL?.(),
        }}
      />
    </TouchableOpacity>
  );
};

export default LocationMessage;
