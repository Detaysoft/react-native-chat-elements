import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  footerArea: {
    width: '100%',
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
  messageInputArea: {
    backgroundColor: '#E9E9E9',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 1,
    paddingBottom: 1,
    borderRadius: 40,
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
  transparentButton: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
