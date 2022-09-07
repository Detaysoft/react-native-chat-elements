import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ILocationMessageProps} from '../../../type';
import styles from './locationMessage-css';

const LocationMessage: FC<ILocationMessageProps> = (
  props: ILocationMessageProps,
) => {
  const handleOnLongPress = () => {
    console.log('test', props.id);

    props.onLongPress?.(props.id);
  };
  return (
    <TouchableOpacity
      onLongPress={handleOnLongPress}
      style={{...props.style, backgroundColor: 'red'}}
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
