import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  meetingLinkContainer: {
    width: 300,
  },
  meetingLinkContent: {
    backgroundColor: '#e2dfec',
    borderRadius: 100,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  meetingLinkItem: {
    color: '#6c687c',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '100%',
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  meetingLinkTitle: {
    paddingLeft: 7,
  },
  meetingLinkTitleText: {
    color: '#07030a',
    fontSize: 12,
    width: 250,
  },
  meetingLinkButton: {
    backgroundColor: '#ededed',
    borderRadius: 50,
    padding: 7,
  },
});

export default styles;
