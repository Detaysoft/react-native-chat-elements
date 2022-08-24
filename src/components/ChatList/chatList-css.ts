import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  searchBar: {
    height: 55,
  },
  footerMenu: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#336788',
    alignItems: 'center',
  },
  chatList: {
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 5,
    paddingRight: 5,
  },
  menuTrigger: {
    width: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tabBar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 53,
    backgroundColor: '#fff',
  },
  navbarNotificationView: {
    height: 35,
    width: 35,
  },
  navbarNotificationBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 17,
    height: 17,
    borderRadius: 10,
    backgroundColor: 'rgb(255, 68, 68)',
  },
  navbarNotificationBadgeText: {
    fontSize: 10,
    top: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  emptyChat: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  emptyChatMessage: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 6,
    paddingRight: 30,
    marginTop: 6,
  },
  activityIndicatorStyle: {
    marginTop: 6,
    marginLeft: 6,
  },
  tabRefreshStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 260,
    width: 60,
    height: 60,
  },
});

export default styles;
