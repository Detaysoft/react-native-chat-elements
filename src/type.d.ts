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
  //item?: IChatItemProps;
  dataSource?: array;
  message?: string;
  containerStyle?: object;
  messageContainerStyle?: object;
  onItemPress?: func;
  onItemLongPress?: func;
  loading?: bool;
  emptyChatMessageContainerStyle?: object;
  activityIndicatorStyle?: object;
  subtitleStatusFunc?: (item?: any) => any;
  messageRenderer?: MessageRenderer;
  dateCustomFormat?: (item?: any) => any;
}
