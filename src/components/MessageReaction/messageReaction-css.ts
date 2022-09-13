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
    transform: [{skewY: '180deg'}, {rotate: '180deg'}],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
  },
  reaction: {
    transform: [{skewY: '180deg'}, {rotate: '180deg'}],
    backgroundColor: 'red',
  },
  icons: {},
  popup: {},
});

export default styles;
