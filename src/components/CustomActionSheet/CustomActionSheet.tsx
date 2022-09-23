import React, {Component, FC} from 'react';
import {View} from 'react-native';
import {IActionSheetProps} from '../../type';
import ActionSheet, {ActionSheetProps} from 'react-native-actionsheet';
import ChatButton from '../ChatButton/ChatButton';

class CustomActionSheet extends Component<IActionSheetProps> {
  ActionSheet: ActionSheetProps | any;
  constructor(props: IActionSheetProps) {
    super(props);
  }

  showActionSheet = () => {
    this.ActionSheet.show();
  };

  render() {
    return (
      <View>
        <ChatButton
          icon={this.props.button?.icon}
          iconColor={this.props.button?.iconColor}
          iconSize={this.props.button?.iconSize}
          iconFamily={this.props.button?.iconFamily}
          title={this.props.button?.title}
          onPress={this.showActionSheet}
          style={[this.props.button?.style]}
          contentStyle={this.props.button?.contentStyle}
        />
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={this.props.title}
          options={this.props.options}
          cancelButtonIndex={this.props.cancelButtonIndex}
          destructiveButtonIndex={this.props.destructiveButtonIndex}
          onPress={(index: number) => this.props.onPress?.(index)}
        />
      </View>
    );
  }
}

export default CustomActionSheet;
