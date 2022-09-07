import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contentArea: {
    flexDirection: 'column',
    flex: 1,
    paddingBottom: 0,
    transform: [{skewY: '180deg'}, {rotate: '180deg'}],
  },
  contentAreaListView: {
    flex: 1,
    paddingTop: 10,
    ...Platform.select({
      ios: {
        paddingBottom: 50,
      },
      android: {
        paddingBottom: 25,
      },
    }),
    minHeight: '100%',
  },
  notificationPanel: {
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 30,
    backgroundColor: 'transparent',
    transform: [{skewY: '180deg'}, {rotate: '180deg'}],
    ...Platform.select({
      ios: {
        position: 'absolute',
      },
      android: {
        position: 'relative',
      },
    }),
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  notificationPanelContent: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F8AB44',
  },
  spinnerStyle: {
    ...Platform.select({
      ios: {
        height: 40,
      },
      android: {
        height: 30,
      },
    }),
    marginTop: 8,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
