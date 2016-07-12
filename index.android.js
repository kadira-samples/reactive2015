import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@kadira/react-native-storybook';

// import your stories
configure(() => {
  require('./src/components/stories');
}, module);

const StorybookUI = getStorybookUI({port: 9001, host: 'localhost'});
AppRegistry.registerComponent('reactive2015', () => StorybookUI);
