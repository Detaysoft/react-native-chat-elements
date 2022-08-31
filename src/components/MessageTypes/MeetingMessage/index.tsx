import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IMeetingMessageProps} from '../../../type';
import styles from './meetingMessage-css';

const MeetingMessage: FC<IMeetingMessageProps> = (
  props: IMeetingMessageProps,
) => {
  return (
    <View style={styles.mtmgContainer}>
      <View style={styles.mtmgContainerContent}>
        <View style={styles.mtmgSubject}>
          <Text>{props.subject}</Text>
        </View>
        <View style={styles.mtmgBody}>
          <View style={styles.mtmgItem}>
            {props.icon}
            <View style={styles.mtmgContent}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.mtmgTitle}>
                {props.title}
              </Text>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.mtmgDate}>
                {props.dateText}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.mtmgBodyBottom}
          onPress={() => {
            props.onPressToggle;
          }}>
          {props.toggleElement}
        </TouchableOpacity>
        {props.state.toggle === true && (
          <View style={{flex: 1}}>
            {props.data &&
              props.data.map((x: any, i: any) => {
                return (
                  <View key={i}>
                    {!x.event && (
                      <View style={styles.mitem}>
                        <View style={styles.mitemAvatar}>
                          {x.avatar ? (
                            <Image
                              style={styles.images}
                              source={{
                                uri: x.src,
                              }}
                            />
                          ) : (
                            // <IconE
                            //   name={'chat'}
                            //   size={20}
                            //   color={'#00000066'}
                            // />
                            <Text></Text>
                          )}
                        </View>
                        <View style={styles.mitemBody}>
                          <View style={styles.mitemBodyTop}>
                            <TouchableOpacity
                              // onPress={() =>
                              //   GLOBALS.promise.view.emit(
                              //     'openMeetMessageChat',
                              //     x.id,
                              //   )
                              // }
                              style={styles.mitemBodyTopTitle}>
                              <Text style={{color: '#6264a7'}}>{x.title}</Text>
                            </TouchableOpacity>
                            <Text style={styles.mitemBodyTopTime}>
                              {/* {x.dateString
                                ? x.dateString
                                : x.date &&
                                  !isNaN(x.date) &&
                                  dateCustomFormat('relative', x.date)} */}
                            </Text>
                          </View>
                          <View>
                            <Text
                              ellipsizeMode="tail"
                              style={styles.mitemBodyBottomTitle}>
                              {x.message}
                            </Text>
                          </View>
                        </View>
                      </View>
                    )}
                    {x.event && (
                      <View style={styles.mitemEvent}>
                        <View
                          style={[
                            styles.mitemBottomBody,
                            x.record && styles.mitemBodyRecord,
                          ]}>
                          {/* <IconF name={'video'} size={20} color="#00000066" /> */}
                        </View>
                        <View style={styles.mitemBodyBottomTop}>
                          <Text style={{fontSize: 13}}>{x.event.title}</Text>
                          <View style={styles.mitemBodyTopTime}>
                            <Text style={{fontSize: 10}}>
                              {/* {x.dateString
                                ? x.dateString
                                : x.date &&
                                  !isNaN(x.date) &&
                                  dateCustomFormat('relative', x.date)} */}
                            </Text>
                          </View>
                          <View style={styles.mitemAvatarContent}>
                            <View style={styles.mitemAvatars}>
                              {x.event.avatars &&
                                x.event.avatars
                                  .slice(0, x.event.avatarsLimit)
                                  .map((x: any, i: any) => {
                                    <Image
                                      style={styles.images}
                                      source={{
                                        uri: x.src,
                                      }}
                                    />;
                                  })}
                            </View>
                          </View>
                          {x.record && (
                            <View style={styles.mtmgCallRecord}>
                              <View style={styles.mtmgCallBody}>
                                <TouchableOpacity
                                  onPress={e => {
                                    //onMeetingVideoLinkClick(x, i, e);
                                  }}
                                  style={styles.mtmgCallAvatars}>
                                  <Image
                                    style={styles.callAvatar}
                                    source={x.record.avatar}
                                  />
                                  <Text style={styles.mtmgRecordTime}>
                                    {x.record.time}
                                  </Text>
                                </TouchableOpacity>
                                <View style={styles.mtmgCallBodyTitle}>
                                  <Text
                                    ellipsizeMode="tail"
                                    numberOfLines={1}
                                    style={styles.mtmgCallBodyTitleText}>
                                    {x.record.title}
                                  </Text>
                                  <Text
                                    ellipsizeMode="tail"
                                    numberOfLines={1}
                                    style={styles.mtmgCallBodyBottom}>
                                    {x.record.savedBy}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          )}
                        </View>
                      </View>
                    )}
                  </View>
                );
              })}
          </View>
        )}
      </View>
    </View>
  );
};

export default MeetingMessage;
