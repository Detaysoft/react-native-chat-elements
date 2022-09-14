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
    marginBottom: 50,
  },
  reaction: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  icons: {
    maxWidth: 150,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 50,
  },
  action: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'column',
    maxHeight: 150,
  },
});

export default styles;
