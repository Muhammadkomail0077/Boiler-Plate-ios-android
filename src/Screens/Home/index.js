import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import COLORS from '../../Assets/Style/Color';
import {AudioRecording} from '../../Components/AudioRecording';
import {FaceBookAuth} from '../../Components/FaceBook';
import {GoogleAuth} from '../../Components/GoogleAuth';
import Input from '../../Components/ReusableComponent/Input';
import SafeArea from '../../Components/ReusableComponent/Safearea';

export const Home = () => {
  const Navigation = useNavigation();
  const [userDataFromFacebook, setUserDataFromFacebook] = useState([]);

  const {AuthReducer} = useSelector(state => state);
  console.log('reducerData: ', AuthReducer.userData);

  return (
    <SafeArea>
      <View style={{alignSelf: 'center', margin: '10%'}}>
        <FaceBookAuth />
        <GoogleAuth />
      </View>
    </SafeArea>
  );
};
