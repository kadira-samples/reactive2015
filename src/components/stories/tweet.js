import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import Tweet from "../tweet";
import CenteredView from './centered';

const stories = storiesOf('Tweet');

stories.add('default view', () => {
  const props = {
    user: {
      'screen_name': 'arunoda',
      'name': 'Arunoda Susiripala',
      'profile_image_url': 'https://pbs.twimg.com/profile_images/1657382399/aruna_400x400.png',
    },
    text: 'I highly recommend Reactive Conf. Try to buy a ticket before it\'s too late.',
  };

  return (
    <Tweet {...props}/>
  );
});

stories.add('with a unicode name', () => {
  const props = {
    user: {
      'screen_name': 'arunoda',
      'name': 'අරුනෝද සුසිරිපාල',
      'profile_image_url': 'https://pbs.twimg.com/profile_images/1657382399/aruna_400x400.png',
    },
    text: 'I highly recommend Reactive Conf. Try to buy a ticket before it\'s too late.',
  };

  return (
    <Tweet {...props}/>
  );
});
