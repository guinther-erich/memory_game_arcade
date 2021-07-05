import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Game } from '../screens/Game';
import { Login } from '../screens/Login';
import { EndGame } from '../screens/EndGame';
import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.background100
        }
      }}
    >
      <Screen 
        name="Login"
        component={Login}
      />
      <Screen 
        name="Game"
        component={Game}
      />
      <Screen 
        name="EndGame"
        component={EndGame}
      />
    </Navigator>
  )
}