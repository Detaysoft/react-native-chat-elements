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
  type: 'audio';
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
  type: 'file';
  id: string;
  position: string;
  body: string;
  progress: JSX.Element;
  fileIcon: JSX.Element;
  downloadIcon: JSX.Element;
  errorIcon: JSX.Element;
  data: {
    size: number;
    status: {
      click: boolean;
      loading: boolean;
      error: boolean;
      download: boolean;
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
  type: 'location';
  imageStyle?: object;
  style?: object;
  onPress: (item?) => void;
  locationURL: (item?) => string;
  selectMessage: (item?) => void;
}

export interface IMeetingMessageProps {
  type: 'meeting';
  data: array;
  title: string;
  dateText: string;
  subject: string;
  state: {
    toggle: boolean;
    participants: array;
  };
  icon: JSX.Element;
  toggleElement: JSX.Element;
  onPressToggle: func;
  downloadFile: func;
  openFile: func;
  message: any;
  reSendMessage: func;
  selectMessage: func;
  cancelSelect: func;
  openImageViewer: func;
}
export interface IPhotoMessageProps {
  type: 'photo';
  id: string;
  data: {
    status: {
      download: boolean;
      click: boolean;
      error: boolean;
      loading: boolean;
    };
    uri: string;
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
  type: 'reply';
  titleColor?: string;
  title?: string;
  photoURL?: ImageSourcePropType;
  closeButton: bool;
  closeButtonIcon: JSX.Element;
  message?: (item?) => string; //string
  selectMessage: (item?) => void;
}

export interface ISystemMessageProps {
  type: 'system';
  date?: (item?) => string;
}

export interface ITextMessageProps {
  type: 'text';
  body: string;
  messageBody: (item?) => JSX.Element;
  style?: object;
}

export interface IVideoMessageProps {
  type: 'video';
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

export type MessageType =
  | ({type: 'location'} & ILocationMessageProps)
  | ({type: 'photo'} & IPhotoMessageProps)
  | ({type: 'video'} & IVideoMessageProps)
  | ({type: 'audio'} & IAudioMessageProps)
  | ({type: 'file'} & IFileMessageProps)
  | ({type: 'text'} & ITextMessageProps)
  | ({type: 'system'} & ISystemMessageProps);

export interface IMessageViewProps {
  downloadFile?: func;
  openFile?: func;
  message?: MessageType;
  reSendMessage?: func;
  selectMessage?: func;
  cancelSelect?: func;
  openMediaViewer?: func;
  messageColor?: any;
}
