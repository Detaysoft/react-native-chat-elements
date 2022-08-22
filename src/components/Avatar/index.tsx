import React, {FC} from 'react';
import {Image, View} from 'react-native';
import styles from './avatar-css';

type Avatar = {
  style?: Object;
  source?: string;
};

const Avatar: FC<Avatar> = (props: Avatar) => {
  return (
    <View>
      {props.source ? (
        <Image style={[styles.avatar, props.style]} source={props.source} />
      ) : (
        <View>
          <Image
            style={[styles.avatar, props.style]}
            source={require('../../../assets/avatar.jpg')}
          />
        </View>
      )}
    </View>
  );
};

export default Avatar;
