import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fileItemContainer: {
    display: 'flex',
    marginLeft: -5,
    marginRight: -5,
  },
  fileItemView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    padding: 10,
  },
  fileIconView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  fileName: {
    fontSize: 14,
    width: '70%',
    marginLeft: 0,
    marginRight: 0,
  },
  fileNameError: {
    color: '#dc4f3c',
  },
  fileSize: {
    fontSize: 11,
  },
  progressBarView: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default styles;
