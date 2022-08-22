import {StyleProp} from 'react-native';

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
  onPress?: GestureResponderEvent;
}
