// // AppNavigator.js
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import ResumeWriters from './ResumeWriters';
// import ResumeWriterDetails from './ResumeWriterDetails';
//
// const Stack = createStackNavigator();
//
// const AppNavigator = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="ResumeWriters" component={ResumeWriters} options={{ title: 'Resume Writers' }} />
//             <Stack.Screen name="ResumeWriterDetails" component={ResumeWriterDetails} options={({ route }) => ({ title: route.params.writer.name })} />
//         </Stack.Navigator>
//     );
// };
//
// export default AppNavigator;
