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
