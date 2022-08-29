import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IReplyMessageProps} from '../../../type';
import Avatar from '../../Avatar';
import styles from './replyMessage-css';

const ReplyMessage: FC<IReplyMessageProps> = (props: IReplyMessageProps) => {
  return (
    <TouchableOpacity
      onLongPress={props.selectMessage}
      style={{
        width: '100%',
        marginBottom: 5,
      }}>
      <View style={styles.replyMessageBox}>
        <View
          style={[
            styles.replyMessageContainer,
            props.titleColor
              ? {
                  borderWidth: 1,
                  borderColor: props.titleColor,
                  backgroundColor: props.titleColor,
                }
              : null,
          ]}>
          <View
            style={[
              styles.titleColorBox,
              {backgroundColor: props.titleColor},
            ]}></View>
          <View style={styles.replyMessageLeft}>
            <View style={styles.replyMessageHeader}>
              <Text
                style={[
                  styles.replyMessageOwner,
                  props.titleColor ? {color: props.titleColor} : null,
                ]}>
                {props.title || 'Unknown'}
              </Text>
              {props.closeButton && props.closeButtonIcon}
            </View>
            <View style={styles.replyMessageBody}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.replyMessage}>
                {props.message?.()}
              </Text>
              {props.photoURL && (
                <Image
                  style={{width: 40, height: 30}}
                  source={
                    (props.photoURL && props.photoURL) ||
                    require('../../../../assets/avatar.jpg')
                  }
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReplyMessage;
