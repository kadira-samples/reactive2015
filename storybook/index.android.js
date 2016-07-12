import { AppRegistry } from 'react-native';
import * as storybook from '@kadira/react-native-storybook';

// import your stories
storybook.configure(function () {
  require('./test_story');
}, module);

AppRegistry.registerComponent('reactive2015', () => storybook.getStorybookUI({
  port: 9001,
  host: '10.0.2.2'
}));
