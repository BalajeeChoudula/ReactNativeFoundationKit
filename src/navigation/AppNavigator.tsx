import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './navigationconfig';

const Stack = createNativeStackNavigator();
const AppNavigator: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName={routes[0].name || 'SignIn'}>
        {Object.values(routes).map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={route.title ? { title: route.title, headerBackVisible: true } : {}}
          />
        ))}
      </Stack.Navigator>
  );
};

export default AppNavigator;
