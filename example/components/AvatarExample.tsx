import React from 'react';
import {Avatar} from '../../src/components';

type Props = {};

const AvatarExample = (props: Props) => {
  return <Avatar source={require('../../assets/download.png')} />;
};

export default AvatarExample;
