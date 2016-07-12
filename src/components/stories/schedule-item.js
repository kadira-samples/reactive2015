import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf, action } from '@kadira/react-native-storybook';
import ScheduleItem from "../schedule-item";
import data from '../../data';

const stories = storiesOf('ScheduleItem');
stories.addDecorator((fn) => (
  <ScrollView
    style={{flex: 1}}
    contentContainerStyle={{
      justifyContent: "center",
      alignItems: "stretch",
      flexDirection: "column"
    }}
  >
    {fn()}
  </ScrollView>
));

const talkData = {
  "category" : "Data Flow",
  "company" : "VacuumLabs",
  "speaker" : "Daniel Steigerwald",
  "photo" : "https://reactive2015.com/assets/img/team/daniel_steigerwald.jpg",
  "summary" : "As programs get bigger, they also become more complex and harder to understand. We all think ourselves pretty clever, of course, but we are mere human beings, and even a moderate amount of chaos tends to baffle us. And then it all goes downhill. Working on something you do not really understand is a bit like cutting random wires on those time-activated bombs they always have in movies. If you are lucky, you might get the right one ― especially if you are the hero of the movie and strike a suitably dramatic pose ― but there is always the possibility of blowing everything up.",
  "talk" : true,
  "time" : "11:15–11:45",
  "title" : "Functional Programming in JavaScript. What, why, and how.",
};

stories.add('default view', () => {
  const props = {
    ...talkData,
    onSelect: action('onSelect'),
  };

  return (
    <ScheduleItem {...props}/>
  );
});

stories.add('no header', () => {
  const props = {
    ...talkData,
    onSelect: action('onSelect'),
    noHeader: true,
  };

  return (
    <ScheduleItem {...props}/>
  );
});
