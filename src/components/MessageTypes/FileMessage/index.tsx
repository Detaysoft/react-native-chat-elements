import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IFileMessageProps} from '../../../type';
import styles from './fileMessage-css';

const FileMessage: FC<IFileMessageProps> = (props: IFileMessageProps) => {
  return (
    <TouchableOpacity
      onLongPress={props.selectMessage}
      onPress={() => props.onPress}
      style={[
        styles.fileItemContainer,
        props.position === 'right'
          ? {backgroundColor: '#5ba7c5'}
          : {backgroundColor: '#fff'},
      ]}>
      <View
        style={[
          styles.fileItemView,
          props.position === 'right'
            ? {backgroundColor: '#519bb8'}
            : {backgroundColor: '#f7f7f7'},
        ]}>
        <View style={styles.fileIconView}>
          {props.fileIcon}
          {!!props.data.size && (
            <Text
              numberOfLines={1}
              style={[
                styles.fileSize,
                props.position === 'right'
                  ? {color: '#e0e0e0'}
                  : {color: '#aaa'},
              ]}>
              {props.fileSizeConversion()}
            </Text>
          )}
        </View>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[
            styles.fileName,
            props.position === 'right'
              ? {color: '#fdfdfd'}
              : {color: '#424242'},
          ]}>
          {props.body}
        </Text>
        {!props.data.status.click && props.downloadIcon}
        {props.data.status.error && props.errorIcon}
        {props.data.status.loading &&
        typeof props.data.status.loading === 'number' &&
        props.data.status.loading !== 0 &&
        !props.data.status.error ? (
          <View style={styles.progressBarView}>{props.progress}</View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default FileMessage;
