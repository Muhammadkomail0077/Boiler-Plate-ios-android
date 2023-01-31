import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

export const Notifications = () => {
  const Navigation = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <Button
        mode="contained"
        onPress={() => Navigation.navigate('Profile')}>
        Go to Profile
      </Button>
    </View>
  );
};
