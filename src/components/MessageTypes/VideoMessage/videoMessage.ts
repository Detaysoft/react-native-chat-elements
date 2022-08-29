import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  videoPlayIcon: {
    zIndex: 99999,
    position: 'absolute',
    left: '40%',
    top: '40%',
  },
  chatMessageImage: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    resizeMode: 'contain',
  },
  imageDownloadButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgDownloadBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(60,151,220,0.6)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
