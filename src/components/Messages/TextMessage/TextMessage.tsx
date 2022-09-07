import React, {FC} from 'react';
import {Platform, Text, View} from 'react-native';
import {ITextMessageProps} from '../../../type';

const TextMessage: FC<ITextMessageProps> = (props: ITextMessageProps) => {
  return (
    <View
      style={[
        {
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: 2,
          marginTop: 1,
        },
        props.style,
      ]}>
      {props.body && props.messageBody?.()}
      <Text>{'\xa0'.repeat(Platform.OS === 'ios' ? 15 : 20)}</Text>
    </View>
  );
};

export default TextMessage;
