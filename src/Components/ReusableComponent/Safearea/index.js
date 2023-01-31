import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import COLORS from '../../../Assets/Style/Color';
import {useSelector} from 'react-redux';

function SafeArea(props) {
  const reducerData = useSelector(state => state);


  return (
    <SafeAreaView
    //   style={{
    //     backgroundColor: reducerData.isDark.isdark
    //       ? COLORS.darkMode
    //       : COLORS.bgcolor,
    //     height: '100%',
    //     // marginBottom: 100
    //   }}
    >
      {props.children}
    </SafeAreaView>
  );
}

export default SafeArea;
