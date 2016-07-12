import { AppRegistry } from 'react-native';
import * as storybook from '@kadira/react-native-storybook';

// import your stories
storybook.configure(function () {
  // ...
}, module);

AppRegistry.registerComponent('reactive2015', () => storybook.getStorybookUI({
  port: 9001,
  host: 'localhost'
}));
