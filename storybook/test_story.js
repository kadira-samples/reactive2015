import React from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import { storiesOf, action } from '@kadira/react-native-storybook';

function Button(props) {
  return (
    <TouchableNativeFeedback onPress={props.onPress || Function()}>
      {props.children}
    </TouchableNativeFeedback>
  );
}

const stories = storiesOf('Button');

stories.add('default view', () => (
  <Button onPress={action('clicked')}>
    <View><Text>Hello World</Text></View>
  </Button>
));
