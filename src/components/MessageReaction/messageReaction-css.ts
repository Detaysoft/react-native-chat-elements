import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  messageReactionContainer: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 999999999,
  },
  reaction: {
    backgroundColor: 'white',
  },
  icons: {
    padding: 10,
    borderRadius: 50,
  },
  popup: {padding: 10, borderRadius: 10},
});

export default styles;
