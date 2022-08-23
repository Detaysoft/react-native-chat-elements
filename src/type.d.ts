import React from 'react';
import {GestureResponderEvent, StyleProp} from 'react-native';

export interface IAvatarProps {
  style?: Object;
  source?: string;
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
  source?: string;
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

export interface IChatItemProps {
  title: string;
  subtitle?: string;
  subtitleStatus?: any;
  badge: number;
  noImage: bool;
  source?: string;
  date: any;
  status?: string;
  type: string;
  listType: string;
  handleOnPress?: (event: GestureResponderEvent) => void;
  handleOnLongPress?: (event: GestureResponderEvent) => void;
  subTitleStatus: (item?: any) => any;
  renderTypes: (item?: array) => any;
  dateCustomFormat: (item?: any) => any;
}
