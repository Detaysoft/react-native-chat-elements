import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  replyMessageBox: {
    borderRadius: 5,
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    marginTop: 5,
    width: '80%',
  },
  replyMessageContainer: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    height: 'auto',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  replyMessageHeader: {
    display: 'flex',
    flexDirection: 'row',
    height: 23,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  replyMessageBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleColorBox: {
    margin: 5,
  },

  replyMessageLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 3,
    paddingBottom: 4,
    flex: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#d7d7d7',
  },

  replyMessageOwner: {
    fontSize: 13,
  },

  replyMessage: {
    color: '#5a5a5a',
    overflow: 'hidden',
  },
});

export default styles;
