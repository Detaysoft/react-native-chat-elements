import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 10,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    bottom: 70,
    position: 'absolute',
    zIndex: 99999,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginVertical: 20,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: '500',
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    fontSize: 26,
    width: '75%',
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default styles;
