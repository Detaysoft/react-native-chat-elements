import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    height: '100%',
  },
  body: {
    flex: 1,
    backgroundColor: '#E9E9E9',
  },
  navbarArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    paddingTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  contentArea: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
    transform: [{skewY: '180deg'}, {rotate: '180deg'}],
  },
  contentAreaListView: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  footerArea: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderTopColor: '#d3d3d3',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  titleText: {
    color: '#fff',
    backgroundColor: 'transparent',
  },
  emojipPicker: {
    backgroundColor: '#f8ab44',
    width: 34,
    height: 34,
    borderRadius: 100,
    position: 'absolute',
    right: 4,
    bottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageInputArea: {
    backgroundColor: '#E9E9E9',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 68,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 1,
    paddingBottom: 1,
  },
  messageInput: {
    backgroundColor: '#E9E9E9',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: 13,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },

  messageInputArrow: {
    width: 0,
    height: 0,
    borderRightWidth: 12,
    borderBottomWidth: 12,
    borderRightColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',

    borderLeftWidth: 12,
    borderLeftColor: '#fff',

    borderTopWidth: 12,
    borderTopColor: '#fff',

    position: 'absolute',
    right: -12,
    top: 10,
    marginLeft: 0,
    margin: 'auto',
  },

  chatViewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleUserImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },

  // ListItem Style Templates

  seperatorDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 5,
  },
  centeredDate: {
    minWidth: 50,
    backgroundColor: 'rgba(255,255,255,0)',
    borderBottomWidth: 1,
    borderBottomColor: '#9cbccb',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  seperatorDateText: {
    flex: 1,
    textAlign: 'center',
    marginTop: 4,
    color: '#6493a9',
    fontSize: 13,
    paddingBottom: 8,
  },
  sendingChatMessageItemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 15,
    marginLeft: 5,
    marginTop: 5,
  },
  messageShadow: {
    elevation: 3,
    shadowColor: '#212121',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  sendingChatMessage: {
    marginBottom: 5,
    backgroundColor: '#fff',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  receivedChatMessageItemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 5,
    marginLeft: 15,
    marginTop: 5,
  },
  receivedChatMessage: {
    marginBottom: 5,
    backgroundColor: '#d1f4ff',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  sendingMessageColor: {
    fontSize: 14,
    color: '#737373',
  },
  receivedMessageColor: {
    fontSize: 14,
    color: '#737373',
  },
  chatTime: {
    color: 'rgba(115,115,115,0.5)',
    fontSize: 10,
    marginTop: 0,
  },
  chatMessageImage: {
    borderRadius: 5,
    resizeMode: 'contain',
  },
  messageBox: {
    transform: [{skewY: '180deg'}, {rotate: '180deg'}],
  },

  // Transparent Button Style
  transparentButton: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerAlignedText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#5b8fad',
  },
  messageSendingError: {
    flex: 1,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginRight: 5,
    marginTop: 5,
  },
  messageSendingErrorText: {
    backgroundColor: 'transparent',
    fontSize: 10,
    marginLeft: 4,
  },
  imageDownloadButton: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingCentering: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
    right: 0,
    left: 0,
    top: 3,
    bottom: 0,
    padding: 8,
  },
  linkColor: {
    color: '#737373',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#737373',
  },
  notificationPanel: {
    height: 30,
    backgroundColor: '#F8AB44',
  },

  notificationPanelContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  spinnerStyle: {
    height: 40,
    marginTop: 8,
  },

  receivedChatBubbleArrow: {
    position: 'absolute',
    backgroundColor: 'transparent',
    left: -11.5,
    top: -9.5,
    zIndex: 1,

    shadowOffset: {
      height: 1,
      width: -2.6,
    },
  },

  bubbleArrowShadow: {
    elevation: 3,
    shadowColor: '#212121',
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },

  sendingChatBubbleArrow: {
    position: 'absolute',
    backgroundColor: 'transparent',
    right: -19,
    top: -9.5,
    zIndex: 1,

    shadowOffset: {
      height: 0.6,
      width: 2.6,
    },
  },
  writingAnimation: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nav_bar_buttons: {
    flex: 1,
    flexDirection: 'row',
  },
  contextMenu: {
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20,
  },

  uploadedFileContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },

  alignBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadedFileText: {
    color: '#98cae6',
  },

  user_vcard: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginRight: 10,
  },

  actionButtonIcon: {
    fontSize: 25,
    height: 22,
    color: 'white',
  },

  videoCallButton: {
    backgroundColor: 'transparent',
    width: 40,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: -4,
    marginRight: 4,
  },

  headerMenuButton: {
    width: 25,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  menuTrigger: {
    width: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  groupChatUserName: {
    fontSize: 11,
    color: '#5890a3',
  },
});

export default styles;
