import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import components from './src/example';

const App = () => {
  const [show, setshow] = useState('');

  const showELement = () => {
    switch (show) {
      case 'avatar':
        return components.avatar;
      case 'chatButton':
        return components.chatButton;
      case 'popup':
        return components.popup;
      case 'customActionSheet':
        return components.customActionSheet;
      case 'chatItem':
        return components.chatItem;
      case 'chatList':
        return components.chatList;
      case 'audioMessage':
        return components.audioMessage;
      case 'fileMessage':
        return components.fileMessage;
      case 'locationMessage':
        return components.locationMessage;
      case 'photoMessage':
        return components.photoMessage;
      case 'replyMessage':
        return components.replyMessage;
      case 'systemMessage':
        return components.systemMessage;
      case 'textMessage':
        return components.textMessage;
      case 'videoMessage':
        return components.videoMessage;
      default:
        break;
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.button}>
            <Button title="avatar" onPress={() => setshow('avatar')} />
          </View>
          <View style={styles.button}>
            <Button title="chatButton" onPress={() => setshow('chatButton')} />
          </View>
          <View style={styles.button}>
            <Button title="popup" onPress={() => setshow('popup')} />
          </View>
          <View style={styles.button}>
            <Button
              title="customActionSheet"
              onPress={() => setshow('customActionSheet')}
            />
          </View>
          <View style={styles.button}>
            <Button title="chatItem" onPress={() => setshow('chatItem')} />
          </View>
          <View style={styles.button}>
            <Button title="chatList" onPress={() => setshow('chatList')} />
          </View>
          <View style={styles.button}>
            <Button
              title="audioMessage"
              onPress={() => setshow('audioMessage')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="fileMessage"
              onPress={() => setshow('fileMessage')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="locationMessage"
              onPress={() => setshow('locationMessage')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="photoMessage"
              onPress={() => setshow('photoMessage')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="replyMessage"
              onPress={() => setshow('replyMessage')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="systemMessage"
              onPress={() => setshow('systemMessage')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="textMessage"
              onPress={() => setshow('textMessage')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="videoMessage"
              onPress={() => setshow('videoMessage')}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}>
          {showELement()}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  button: {
    margin: 2,
  },
});

export default App;
