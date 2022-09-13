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
  button?: IChatButtonProps;
  buttonTitle?: string;
}

export interface IActionSheet {
  button?: IChatButtonProps;
  title?: string;
  options: string[];
  cancelButtonIndex?: number;
  destructiveButtonIndex?: number;
  onPress?: (index?: number) => void;
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
  emptyChatText?: string;
  emptyChatMessageContainerStyle?: object;
  activityIndicatorStyle?: object;
  subtitleStatusFunc?: (item?: any) => any;
  messageRenderer?: MessageRenderer;
  dateCustomFormat?: (item?: any) => any;
}

/** Message Types */
interface IMessage {
  type?:
    | 'location'
    | 'photo'
    | 'video'
    | 'audio'
    | 'file'
    | 'text'
    | 'system'
    | 'meeting'
    | 'meetingLink'
    | 'reply';
  chatType?: string;
  position?: string;
  reply?: IReplyMessageProps;
  sended?: 'notsended' | 'forwarded' | string;
  date?: any;
  data?: any;
  selected?: boolean;
  sendStatusIcon?: JSX.Element;
  messageColor?: any;
  retracted?: boolean;
  forwarded?: boolean;
  id?: string;
  notch?: true;
  ownerId?: string;
  receiveId?;
  seen?: 'notseen' | string;
  seenUsers?: Array;
  messageTextColor?: object;
  onLongPress?: (item?) => void;
}
export interface IAudioMessageProps extends IMessage {
  audioURL?: string;
  duration?: number;
  started?: boolean;
  playIcon?: JSX.Element;
  playState?: 'playing' | 'paused';
  pauseIcon?: JSX.Element;
  slider?: JSX.Element;
  audioTime?: JSX.Element;
  onStartPlay?: (item?) => void;
  onPausePlay?: (item?) => void;
  onResumePlayer?: (item?) => void;
}

export interface IFileMessageProps extends IMessage {
  id?: string;
  body?: string;
  progress?: JSX.Element;
  fileIcon?: JSX.Element;
  downloadIcon?: JSX.Element;
  errorIcon?: JSX.Element;
  data?: {
    size?: number;
    status?: {
      click?: boolean;
      loading?: boolean;
      error?: boolean;
      download?: boolean;
    };
  };
  style?: object;
  onPress?: (item?) => void;
  fileSizeConversion?: (item?) => string;
  openFile?: (item?) => void;
  downloadFile?: (item?) => void;
}

export interface ILocationMessageProps extends IMessage {
  imageStyle?: object;
  style?: object;
  onPress?: (item?) => void;
  locationURL?: (item?) => string;
}

export type MessageType =
  | ({type: 'location'} & ILocationMessageProps)
  | ({type: 'photo'} & IPhotoMessageProps)
  | ({type: 'video'} & IVideoMessageProps)
  | ({type: 'audio'} & IAudioMessageProps)
  | ({type: 'file'} & IFileMessageProps)
  | ({type: 'text'} & ITextMessageProps)
  | ({type: 'system'} & ISystemMessageProps)
  | ({type: 'meeting'} & IMeetingMessageProps)
  | ({type: 'meetingLink'} & IMeetingLinkMessageProps)
  | ({type: 'reply'} & IReplyMessageProps);
export interface IMeetingLinkMessageProps extends IMessage {
  title?: string;
  icon?: JSX.Element;
  onPress?: (item?) => void;
}
export interface IMeetingMessageProps extends IMessage {
  dataSource?: {
    avatar: any;
    src: string;
    title: string;
    message: string;
    event: {
      title: string;
      avatars: array;
      avatarsLimit: number;
    };
    record: {
      avatar: string;
      time: string;
      title: string;
      savedBy: string;
    };
  }[];
  title?: string;
  dateText?: string;
  subject?: string;
  state?: {
    toggle?: boolean;
    participants?: array;
  };
  icon?: JSX.Element;
  avatarIcon?: JSX.Element;
  toggleElement?: JSX.Element;
  recordIcon?: JSX.Element;
  onPressMeetingVideoLink?: (item?, item2?, item3?) => any;
  onPressTitle?: (item?) => any;
  onPressToggle?: (item?) => any;
  downloadFile?: (item?) => any;
  openFile?: (item?) => any;
  reSendMessage?: (item?) => any;
  selectMessage?: (item?) => any;
  cancelSelect?: (item?) => any;
  openImageViewer?: (item?) => any;
}

export interface IPhotoMessageProps extends IMessage {
  id?: string;
  data?: {
    status?: {
      download?: boolean;
      click?: boolean;
      error?: boolean;
      loading?: boolean;
    };
    uri?: string;
  };
  style?: object;
  downloadIcon?: JSX.Element;
  errorIcon?: JSX.Element;
  progress?: JSX.Element;
  onPress?: (item?) => void;
  downloadFile?: (item?: any) => void;
  openMediaViewer?: (item?) => any;
}

export interface IReplyMessageProps extends IMessage {
  titleColor?: string;
  title?: string;
  photoURL?: ImageSourcePropType;
  closeButton?: bool;
  closeButtonIcon?: JSX.Element;
  message?: (item?) => string; //string
}

export interface ISystemMessageProps extends IMessage {
  date?: (item?) => string;
}

export interface ITextMessageProps extends IMessage {
  body?: string;
  style?: object;
  messageBody?: (item?) => JSX.Element;
}

export interface IVideoMessageProps extends IMessage {
  message?: {
    data?: {
      thumbnailURL?: string;
      status?: {
        click?: boolean;
        loading?: boolean;
        error?: boolean;
        download?: boolean;
      };
    };
    body?: string;
  };
  videoPlayIcon?: JSX.Element;
  downloadIcon?: JSX.Element;
  errorIcon?: JSX.Element;
  progress?: JSX.Element;
  onPress?: (item?) => void;
  onPressFile?: (item?) => void;
}

export interface IMessageViewProps {
  phoneIcon?: JSX.Element;
  phoneText?: string;
  downloadFile?: func;
  openFile?: func;
  reSendMessage?: func;
  selectMessage?: func;
  cancelSelect?: func;
  openMediaViewer?: func;
  onLongPressNotSended?: func;
  onPressCancelSelect?: func;
  onLongPressSelectMessage?: func;
  onPressGroupChat?: func;
  resendIcon?: JSX.Element;
  messageSendingErrorText?: string;
}

export interface IMessageListProps {
  id: string;
  noMoreMessages: string;
  endOfMam: bool;
  mamLoading: bool;
  messageList: MessageType[];
  onLoading: (item?) => void;
  reSendMessage: (item?) => void;
  downloadFile: (item?) => void;
  onMessageSelect?: (item?) => void;
  openFile: (item?) => void;
  openMediaViewer: (item?) => void;
  onScroll: (item?) => void;
}

export type MessageViewType = IMessageViewProps & MessageType;

export interface IMessageSenderProps {
  id?: string;
  type?: string;
  isAudioRecord?: boolean;
  messageInputAreaStyle?: object;
  replyMessage?: IReplyMessageProps;
  textInputRef?: React.LegacyRef;
  messageInputStyle?: object;
  inputPlaceholder?: string;
  inputPlaceholderTextColor?: string;
  inputUnderLineColorAndroid?: ColorValue;
  inputMultiLine?: boolean;
  inputMaxLength?: number;
  opacityShow?: Animated.Value;
  opacityHide?: Animated.Value;
  actionSheetIcon?: JSX.Element;
  cameraIcon?: JSX.Element;
  micIcon?: JSX.Element;
  sendMessageIcon?: JSX.Element;
  sendableMessage?: boolean;
  recorderOpacity: Animated.Value;
  audioRecord: IAudioRecorderProps;
  inputOnContentSizeChange?: (
    e?: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => void;
  inputOnChangeText?: (text: string) => void;
  inputOnChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onActionSheet?: () => void;
  sendPhoto?: (item?) => void;
  onSendMessage?: () => void;
}

export interface IAudioRecorderProps {
  chatId?: string;
  recorded?: boolean;
  recording?: boolean;
  duration?: number;
  startRecording?: string;
  beingRecorded?: string;
  recordingFinished?: string;
  safeCloseIcon?: JSX.Element;
  stopRecordIcon?: JSX.Element;
  startRecordIcon?: JSX.Element;
  sendRecordIcon?: JSX.Element;
  recordTime?: JSX.Element;
  onPressSafeClose?: () => void;
  onPressStopRecord?: () => void;
  onPressStartRecord?: () => void;
  onPressSendRecord?: () => void;
  toggleAudioRecorder?: () => void;
}

export interface IMessageReactionProps {
  showMessageActions: boolean;
  data: MessageViewType;
  onPressShowMessageActions: (item?) => void;
}
