import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {IPhotoMessageProps} from '../../../type';
import styles from './photoMessage-css';

const PhotoMessage: FC<IPhotoMessageProps> = (props: IPhotoMessageProps) => {
  return (
    <TouchableOpacity onLongPress={props.onLongPress} onPress={props.onPress}>
      <View style={props.style}>
        <Image
          style={[styles.chatMessageImage]}
          source={{
            uri: props.data?.uri || '',
          }}
        />
        {!props.data?.status?.click ? (
          <TouchableOpacity
            style={styles.imageDownloadButton}
            onLongPress={props.onLongPress}
            onPress={() => props.downloadFile?.(props.id)}>
            <View style={styles.imgDownloadBtn}>{props.downloadIcon}</View>
          </TouchableOpacity>
        ) : null}
        {props.data?.status?.error ? (
          <TouchableOpacity
            onLongPress={props.onLongPress}
            style={styles.imageDownloadButton}>
            {props.errorIcon}
          </TouchableOpacity>
        ) : null}
        {props.data?.status?.loading &&
        typeof props.data?.status.loading === 'number' &&
        props.data?.status.loading !== 0 &&
        !props.data?.status.error ? (
          <View style={styles.imageDownloadButton}>{props.progress}</View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default PhotoMessage;
