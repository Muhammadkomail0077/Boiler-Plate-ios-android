import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../../Screens/Home';
import {Notifications} from '../../Screens/Notifications';
import {Profile} from '../../Screens/Profile';
import {Settings} from '../../Screens/Settings';
import SimpleBottomTab from '../SimpleBottomScreen';
import CurveBottomBar from '../CurveBottomScreen';
// import MessageList from '../../Components/MessageList';
// import Messages from '../../Screens/Messages';
import { Messages } from '../../Screens/Messages';

export default function StackNavigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="CurveBottomBar" component={CurveBottomBar} />
        {/* <Stack.Screen name="message" component={Messages} /> */}
        <Stack.Screen name="SimpleBottomTab" component={SimpleBottomTab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
