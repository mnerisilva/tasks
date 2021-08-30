import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Task from "./src/pages/Task/"
import NewTask from "./src/pages/NewTask/"
import Details from "./src/pages/Details/"

const Stack = createStackNavigator()

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoteName="Task">
          <Stack.Screen
          name="Tasks"
          component={Task}
          options={{
            headerTintColor: "#f92e6a" 
          }}
          />
          
          <Stack.Screen
          name="New Task"
          component={NewTask}
          options={{
            headerTintColor: "#f92e6a"
          }}
          />
          <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#f92e6a"
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

