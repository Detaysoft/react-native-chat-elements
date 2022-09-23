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

export interface IActionSheetProps {
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
interface IMessageProps {
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
  reactions?: JSX.Element[];
  onLongPress?: (item?) => void;
}
export interface IAudioMessageProps extends IMessageProps {
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

export interface IFileMessageProps extends IMessageProps {
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

export interface ILocationMessageProps extends IMessageProps {
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
export interface IMeetingLinkMessageProps extends IMessageProps {
  title?: string;
  icon?: JSX.Element;
  onPress?: (item?) => void;
}
export interface IMeetingMessageProps extends IMessageProps {
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

export interface IPhotoMessageProps extends IMessageProps {
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

export interface IReplyMessageProps extends IMessageProps {
  titleColor?: string;
  title?: string;
  photoURL?: ImageSourcePropType;
  closeButton?: bool;
  closeButtonIcon?: JSX.Element;
  message?: (item?) => string; //string
}

export interface ISystemMessageProps extends IMessageProps {
  date?: (item?) => string;
}

export interface ITextMessageProps extends IMessageProps {
  body?: string;
  style?: object;
  messageBody?: (item?) => JSX.Element;
}

export interface IVideoMessageProps extends IMessageProps {
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
  messageReactionIcon?: JSX.Element[];
  messageReactionAction?: JSX.Element[];
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
  iconStyle: object;
  icons?: JSX.Element[];
  actions?: JSX.Element[];
  onPressShowMessageActions: (item?) => void;
}

export class Avatar extends React.Component<IAvatarProps> {}
export class ChatButton extends React.Component<IChatButtonProps> {}
export class Popup extends React.Component<IPopupProps> {}
export class ActionSheet extends React.Component<IActionSheetProps> {}
export class ChatListItem extends React.Component<IChatListItemProps> {}
export class ChatList extends React.Component<IChatListProps> {}
export class Message extends React.Component<IMessageProps> {}
export class AudioMessage extends React.Component<IAudioMessageProps> {}
export class FileMessage extends React.Component<IFileMessageProps> {}
export class LocationMessage extends React.Component<ILocationMessageProps> {}
export class MeetingLinkMessage extends React.Component<IMeetingLinkMessageProps> {}
export class MeetingMessage extends React.Component<IMeetingMessageProps> {}
export class PhotoMessage extends React.Component<IPhotoMessageProps> {}
export class ReplyMessage extends React.Component<IReplyMessageProps> {}
export class SystemMessage extends React.Component<ISystemMessageProps> {}
export class TextMessage extends React.Component<ITextMessageProps> {}
export class VideoMessage extends React.Component<IVideoMessageProps> {}
export class MessageView extends React.Component<IMessageViewProps> {}
export class MessageList extends React.Component<IMessageListProps> {}
export class MessageSender extends React.Component<IMessageSenderProps> {}
export class AudioRecorder extends React.Component<IAudioRecorderProps> {}
export class MessageReaction extends React.Component<IMessageReactionProps> {}
