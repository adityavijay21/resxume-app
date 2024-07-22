// ResumeBuilder.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import resume creation 
import PersonalInfoScreen from './PersonalInfoScreen';
import EducationScreen from './EducationScreen';
import ExperienceScreen from './ExperienceScreen';
import GenerateResumeScreen from './GenerateResumeScreen';

const Stack = createStackNavigator();

const ResumeBuilder = () => {
  return (
    <Stack.Navigator initialRouteName="PersonalInfo">
      <Stack.Screen 
        name="PersonalInfo" 
        component={PersonalInfoScreen} 
        options={{ title: 'Personal Information' }}
      />
      <Stack.Screen 
        name="Education" 
        component={EducationScreen} 
        options={{ title: 'Education' }}
      />
      <Stack.Screen 
        name="Experience" 
        component={ExperienceScreen} 
        options={{ title: 'Work Experience' }}
      />
      <Stack.Screen 
        name="GenerateResume" 
        component={GenerateResumeScreen} 
        options={{ title: 'Generate Resume' }}
      />
    </Stack.Navigator>
  );
};

export default ResumeBuilder;