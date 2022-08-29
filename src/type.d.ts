import React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
} from 'react-native';

export interface IAvatarProps {
  style?: Object;
  source?: ImageSourcePropType;
}

export interface IChatButtonProps {
  style?: object;
  onlyView?: boolean;
  icon?: React.ReactComponentElement;
  iconSize?: StyleProp;
  iconColor?: StyleProp;
  iconFamily?: StyleProp;
  contentStyle?: object;
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface IPopupProps {
  source?: ImageSourcePropType;
  imageStyle?: object;
  title?: string;
  titleStyle?: object;
  text?: string;
  textStyle?: object;
  button: IChatButtonProps;
  buttonTitle: string;
}

export interface IActionSheet {
  button: IChatButtonProps;
  title: string;
  options: string[];
  cancelButtonIndex: number;
  destructiveButtonIndex: number;
  onPress: (index: number) => void;
}

export interface IChatListItemProps {
  id?: string;
  title?: string;
  subtitle?: string;
  subtitleStatus?: any;
  badge: number;
  avatar?: ImageSourcePropType;
  noImage?: bool;
  date?: any;
  platform?: any;
  status?: string;
  type?: string;
  listType?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  subtitleStatusFunc?: (item?: any) => any;
  messageRenderer?: MessageRenderer;
  dateCustomFormat?: (item?: any) => any;
}

type MessageRenderer = (item?) => JSX.Element[];

export interface IChatListProps {
  dataSource?: array;
  message?: string;
  containerStyle?: object;
  messageContainerStyle?: object;
  onItemPress?: func;
  onItemLongPress?: func;
  loading?: bool;
  emptyChatText: string;
  emptyChatMessageContainerStyle?: object;
  activityIndicatorStyle?: object;
  subtitleStatusFunc?: (item?: any) => any;
  messageRenderer?: MessageRenderer;
  dateCustomFormat?: (item?: any) => any;
}

/** Message Types */

export interface IAudioMessageProps {
  audioURL: string;
  position: string;
  duration: number;
  started: boolean;
  playIcon: JSX.Element;
  playState: 'playing' | 'paused';
  pauseIcon: JSX.Element;
  slider: JSX.Element;
  audioTime: JSX.Element;
  onStartPlay: (event: GestureResponderEvent) => void;
  onPausePlay: (event: GestureResponderEvent) => void;
  onResumePlayer: (event: GestureResponderEvent) => void;
}

export interface IFileMessageProps {
  id: string;
  position: string;
  body: string;
  progress: JSX.Element;
  fileIcon: JSX.Element;
  downloadIcon: JSX.Element;
  errorIcon: JSX.Element;
  data: {
    size: any;
    status: {
      click: any;
      loading: any;
      error: any;
    };
  };
  style?: object;
  onPress: (event: GestureResponderEvent) => void;
  fileSizeConversion: (item?) => string;
  openFile: (event: GestureResponderEvent) => void;
  downloadFile: (event: GestureResponderEvent) => void;
  selectMessage: (event: GestureResponderEvent) => void;
}

export interface ILocationMessageProps {
  imageStyle?: object;
  style?: object;
  onPress: (event: GestureResponderEvent) => void;
  locationURL: (item?) => string;
  selectMessage: (event: GestureResponderEvent) => void;
}

export interface IPhotoMessageProps {
  id: string;
  data: {
    status: {
      download: any;
      click: any;
      error: any;
      loading: any;
    };
    uri: any;
  };
  style?: object;
  downloadIcon: JSX.Element;
  errorIcon: JSX.Element;
  progress: JSX.Element;
  selectMessage: (event: GestureResponderEvent) => void;
  downloadFile: (event: any) => void;
  openMediaViewer: (item?) => any;
}

export interface IReplyMessageProps {
  titleColor?: string;
  title?: string;
  photoURL?: ImageSourcePropType;
  closeButton: bool;
  closeButtonIcon: JSX.Element;
  message?: (item?) => string;
  selectMessage: (event: GestureResponderEvent) => void;
}

export interface ISystemMessageProps {
  date?: (item?) => string;
}

export interface ITextMessageProps {
  messageBody: (item?) => JSX.Element;
  style?: object;
}
