import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {ISystemMessageProps} from '../../../type';
import styles from './systemMessage';

const SystemMessage: FC<ISystemMessageProps> = (props: ISystemMessageProps) => {
  return (
    <View style={styles.seperatorDate}>
      <View style={styles.centeredDate}>
        <Text style={styles.seperatorDateText}>{props.date?.()}</Text>
      </View>
    </View>
  );
};

export default SystemMessage;
