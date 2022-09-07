import React, {FC} from 'react';
import {Image, View} from 'react-native';
import styles from './avatar-css';
import {IAvatarProps} from '../../type';

const Avatar: FC<IAvatarProps> = (props: IAvatarProps) => {
  return (
    <View>
      {props.source ? (
        <Image style={[styles.avatar, props.style]} source={props.source} />
      ) : (
        <View>
          <Image
            style={[styles.avatar, props.style]}
            source={{uri: '../../../assets/avatar.jpg'}}
          />
        </View>
      )}
    </View>
  );
};

export default Avatar;
