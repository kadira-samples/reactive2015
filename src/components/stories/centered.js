import React from 'react';
import { View } from 'react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF'
};

const CenteredView = (props) => (
  <View style={style}>
    {props.children}
  </View>
);

export default CenteredView;
