import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import Speaker from "../speaker";

const stories = storiesOf('Speaker');

stories.add('default view', () => {
  const props = {
    "bio" : "Founder of Seattle based startup pol.is, Senior Front End Developer at Formidable Labs. He has architected and built client side applications for some of the largest brands in the world. Teaches in a series of in depth talks on ReactJS given at Facebook Seattle. Colin's primary focus is UI design, product design and information architecture.",
    "country" : "Seattle,USA",
    "photo" : "https://reactive2015.com/assets/img/team/colin_megill.jpg"
  };

  return (<Speaker {...props}/>);
});

stories.add('with a small bio', () => {
  const props = {
    "bio" : "Founder of Seattle based startup pol.is.",
    "country" : "Seattle,USA",
    "photo" : "https://reactive2015.com/assets/img/team/colin_megill.jpg"
  };

  return (<Speaker {...props}/>);
});

stories.add('no photo', () => {
  const props = {
    "bio" : "Founder of Seattle based startup pol.is.",
    "country" : "Seattle,USA",
  };

  return (<Speaker {...props}/>);
});

stories.add('long country name', () => {
  const props = {
    "bio" : "Founder of Seattle based startup pol.is.",
    "photo" : "https://reactive2015.com/assets/img/team/colin_megill.jpg",
    "country" : "Seattle, United States of America.",
  };

  return (<Speaker {...props}/>);
});
