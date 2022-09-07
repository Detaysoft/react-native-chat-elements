import React, {FC, useState} from 'react';
import {Alert, Image, Modal, Pressable, Text, View} from 'react-native';
import {IPopupProps} from '../../type';
import ChatButton from '../ChatButton/ChatButton';
import styles from './popup-css';

const Popup: FC<IPopupProps> = (props: IPopupProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ChatButton
        icon={props.button?.icon}
        iconColor={props.button?.iconColor}
        iconSize={props.button?.iconSize}
        iconFamily={props.button?.iconFamily}
        title={props.button?.title}
        onPress={() => setModalVisible(true)}
        style={[props.button?.style]}
        contentStyle={props.button?.contentStyle}
      />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modal}>
            <View style={styles.modalView}>
              {props.source && (
                <Image
                  source={props.source}
                  style={[styles.image, props.imageStyle]}
                />
              )}
              <Text style={[styles.modalTitle, props.titleStyle]}>
                {props.title}
              </Text>
              <Text style={[styles.modalText, props.textStyle]}>
                {props.text}
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>{props.buttonTitle}</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Popup;
