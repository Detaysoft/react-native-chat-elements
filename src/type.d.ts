import React from 'react';
import {ImageSourcePropType, StyleProp} from 'react-native';

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
  onPress?: (item?) => void;
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
  onPress?: (item?) => void;
  onLongPress?: (item?) => void;
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
  onStartPlay: (item?) => void;
  onPausePlay: (item?) => void;
  onResumePlayer: (item?) => void;
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
  onPress: (item?) => void;
  fileSizeConversion: (item?) => string;
  openFile: (item?) => void;
  downloadFile: (item?) => void;
  selectMessage: (item?) => void;
}

export interface ILocationMessageProps {
  imageStyle?: object;
  style?: object;
  onPress: (item?) => void;
  locationURL: (item?) => string;
  selectMessage: (item?) => void;
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
  selectMessage: (item?) => void;
  downloadFile: (item: any) => void;
  openMediaViewer: (item?) => any;
}

export interface IReplyMessageProps {
  titleColor?: string;
  title?: string;
  photoURL?: ImageSourcePropType;
  closeButton: bool;
  closeButtonIcon: JSX.Element;
  message?: (item?) => string;
  selectMessage: (item?) => void;
}

export interface ISystemMessageProps {
  date?: (item?) => string;
}

export interface ITextMessageProps {
  messageBody: (item?) => JSX.Element;
  style?: object;
}

export interface IVideoMessageProps {
  message: {
    data: {
      thumbnailURL: string;
      status: {
        click: boolean;
        loading: boolean;
        error: boolean;
        download: boolean;
      };
    };
    body: string;
  };
  videoPlayIcon: JSX.Element;
  downloadIcon: JSX.Element;
  errorIcon: JSX.Element;
  progress: JSX.Element;
  onPress: (item?) => void;
  onPressFile: (item?) => void;
  selectMessage: (item?) => void;
}
