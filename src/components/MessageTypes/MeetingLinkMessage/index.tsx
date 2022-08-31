import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IMeetingLinkMessageProps} from '../../../type';
import styles from './meetingLinkMessage-css';

const MeetingLinkMessage: FC<IMeetingLinkMessageProps> = (
  props: IMeetingLinkMessageProps,
) => {
  return (
    <View style={styles.meetingLinkContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.meetingLinkContent}>
          <View style={styles.meetingLinkItem}>
            <View style={styles.meetingLinkTitle}>
              <Text style={styles.meetingLinkTitleText}>{props.title}</Text>
            </View>
          </View>
          <View style={styles.meetingLinkButton}>{props.icon}</View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MeetingLinkMessage;
