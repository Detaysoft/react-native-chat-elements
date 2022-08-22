import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import components from './src/example';

const App = () => {
  const [show, setshow] = useState('');

  const showELement = () => {
    switch (show) {
      case 'avatar':
        return components.avatar;
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
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 2,
  },
});

export default App;
