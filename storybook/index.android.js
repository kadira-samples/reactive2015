import { AppRegistry } from 'react-native';
import * as storybook from '@kadira/react-native-storybook';
import addTextButton from './addons/add-text-button';

// import your stories
storybook.configure(function () {
  require('./src/components/stories');
}, module);

const StorybookUI = storybook.getStorybookUI({port: 9001, host: 'localhost'});
AppRegistry.registerComponent('reactive2015', () => StorybookUI);