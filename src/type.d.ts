import {GestureResponderEvent, StyleProp} from 'react-native';

export interface IAvatarProps {
  style?: Object;
  source?: string;
}

export interface IChatButtonProps {
  style?: object;
  onlyView?: boolean;
  icon?: any;
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
}

export interface IActionSheet {
  button: IChatButtonProps;
  title: string;
  options: string[];
  cancelButtonIndex: number;
  destructiveButtonIndex: number;
  onPress: (index: number) => void;
}
