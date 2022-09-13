import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  messageBox: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    transform: [{skewY: '180deg'}, {rotate: '180deg'}],
  },
  selectedMessageItem: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    zIndex: 0,
    opacity: 0.7,
    backgroundColor: '#5ba7c58f',
  },
  seperatorDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff00',
    marginTop: 5,
    marginBottom: 5,
  },
  centeredDate: {
    minWidth: 50,
    backgroundColor: '#F8AB44',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 30,
  },
  seperatorDateText: {
    // flex: 1,
    textAlign: 'center',
    marginTop: 5,
    color: '#fff',
    fontSize: 13,
    paddingBottom: 5,
  },
  sendingChatMessageItemContainer: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    //marginRight: 15,
    marginLeft: 5,
    marginTop: 5,
    backgroundColor: '#ffffff00',
  },
  receivedChatMessageItemContainer: {
    //   flex: 0.8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 5,
    // marginLeft: 15,
    marginTop: 5,
    backgroundColor: '#ffffff00',
  },
  groupChatUserName: {
    fontSize: 11,
    color: '#5890a3',
  },
  chatTime: {
    color: '#d4d4d4',
    fontSize: 11.5,
    marginTop: 0,
  },
  messageSendingError: {
    flex: 1,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginRight: 15,
    marginTop: 2,
    marginBottom: 7,
  },
  messageSendingErrorText: {
    backgroundColor: 'transparent',
    fontSize: 10,
    marginLeft: 4,
  },
});

export default styles;
