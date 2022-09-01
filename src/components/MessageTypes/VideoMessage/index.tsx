import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IVideoMessageProps} from '../../../type';
import styles from './videoMessage';

const VideoMessage: FC<IVideoMessageProps> = (props: IVideoMessageProps) => {
  return (
    <TouchableOpacity
      onLongPress={props.onLongPress}
      style={{
        width: 200,
      }}
      onPress={() => {
        if (props.message?.data?.status?.download) {
          props.onPressFile?.();
        }
      }}>
      <View
        style={[
          {
            //  flex: 1,
            height: 200,
          },
        ]}>
        <View style={styles.videoPlayIcon}>{props.videoPlayIcon}</View>
        <Image
          style={[
            styles.chatMessageImage,
            {
              height: 200,
              width: 200,
            },
          ]}
          source={
            props.message?.data?.thumbnailURL
              ? props.message.data?.thumbnailURL
              : require('../../../../assets/download.png')
          }
        />
        {
          <Text ellipsizeMode="tail" numberOfLines={1} style={{width: 150}}>
            {props.message?.body}
          </Text>
        }
        {!props.message?.data?.status?.click ? (
          <TouchableOpacity
            style={styles.imageDownloadButton}
            onPress={() => props.onPressFile?.(props.message)}>
            <View style={styles.imgDownloadBtn}>{props.downloadIcon}</View>
          </TouchableOpacity>
        ) : null}
        {props.message?.data?.status?.error ? (
          <TouchableOpacity style={styles.imageDownloadButton}>
            {props.errorIcon}
          </TouchableOpacity>
        ) : null}
        {props.message?.data?.status?.loading &&
        typeof props.message.data?.status.loading === 'number' &&
        props.message.data?.status.loading !== 0 &&
        !props.message.data?.status.error ? (
          <View style={styles.imageDownloadButton}>{props.progress}</View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default VideoMessage;
