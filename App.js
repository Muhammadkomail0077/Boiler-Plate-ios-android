import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import StackNavigator from './src/Navigators/Stack';
import {Provider, useDispatch, useSelector} from 'react-redux';
import { Store } from './src/Store';

const App = () => {
  // useEffect(() => {
  //   async () => {
  //     if (Platform.OS === 'android') {
  //       try {
  //         const grants = await PermissionsAndroid.requestMultiple([
  //           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //           PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  //         ]);

  //         console.log('write external stroage', grants);

  //         if (
  //           grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
  //             PermissionsAndroid.RESULTS.GRANTED &&
  //           grants['android.permission.READ_EXTERNAL_STORAGE'] ===
  //             PermissionsAndroid.RESULTS.GRANTED &&
  //           grants['android.permission.RECORD_AUDIO'] ===
  //             PermissionsAndroid.RESULTS.GRANTED
  //         ) {
  //           console.log('Permissions granted');
  //         } else {
  //           console.log('All required permissions not granted');
  //           return;
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //         return;
  //       }
  //     }
  //   };
  // }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store}>
      <PaperProvider>
        {/* <NavigationContainer > */}
        <StackNavigator />
        {/* </NavigationContainer> */}
      </PaperProvider>
      <FlashMessage position="center" />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
