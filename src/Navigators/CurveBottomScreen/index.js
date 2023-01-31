import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Animated, TouchableOpacity, View } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from '../../Screens/Home';
import { Notifications } from '../../Screens/Notifications';
import { Profile } from '../../Screens/Profile';
import { Settings } from '../../Screens/Settings';
import { styles } from './style';

const CurveBottomBar = () => {
  const navigation = useNavigation();
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'home':
        icon = 'home';
        break;
      case 'setting':
        icon = 'md-search-sharp';
        break;
      case 'notification':
        icon = 'podium-sharp';
        break;
      case 'profile':
        icon = 'trophy';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'blue' : 'grey'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  


  return (
    <View style={{ flex: 1 }}>
        <CurvedBottomBar.Navigator
          style={{backgroundColor: 'transparent'}}
          strokeWidth={0.5} 
          height={55}
          circleWidth={55}
          bgColor={'black'}
          initialRouteName="home"
          renderCircle={() => (
            <Animated.View style={styles.btnCircle}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => console.log('Working')}
                >
                <Ionicons name={'add'} style={{ fontWeight: '900' }} color={'white'} size={30} />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBar.Screen
            options={{ headerShown: false }}
            name="home"
            position="LEFT"
            component={Home}
          />
          <CurvedBottomBar.Screen
            options={{ headerShown: false }}
            name="setting"
            position="LEFT"
            component={Settings}
          />
          <CurvedBottomBar.Screen
            options={{ headerShown: false }}
            name="notification"
            component={Notifications}
            position="RIGHT"
          />
          <CurvedBottomBar.Screen
            options={{ headerShown: false }}
            name="profile"
            component={Profile}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>
    </View>
  );
};
export default CurveBottomBar;