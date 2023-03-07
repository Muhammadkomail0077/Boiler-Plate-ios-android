import { Formik } from 'formik';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import Input from '../../Components/ReusableComponent/Input';
import * as yup from 'yup';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import { GoogleAuth } from '../../Components/GoogleAuth';
import { FaceBookAuth } from '../../Components/FaceBook';
import { AudioRecording } from '../../Components/AudioRecording';

export const Login = () => {
  const [passHide, setPassHide] = useState(false);
  const [loading, setLoading] = useState(false);

  let loginValidationScheme = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required '),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required '),
  });

  const simpleLogin = value => {
    console.log('Values: ', value);
  }
  return (
    <>
      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount={true}
        onSubmit={values => {
          simpleLogin(values);
          // console.log("values",values);
        }}
        validationSchema={loginValidationScheme}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <SafeArea>
            {loading ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <ActivityIndicator size="large" color="#00ff00" />
              </View>
            ) : (
              <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <GoogleAuth />
                <FaceBookAuth />
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexGrow: 1,
                    margin: '5%',
                  }}>
                  
                  <View>
                    {/* <Heading style={styles.textheading}>Login to continue</Heading> */}
                    <Heading
                      Stylefont={'normal'}
                      Fontweight={'700'}
                      Fontsize={18}
                      txtAlign={'center'}
                      p={10}
                      lh={40}
                      Heading={'Login to continue'}
                    />
                  </View>
                  <View>
                    <Input
                      Onchange={handleChange('email')}
                      Onblur={handleBlur('email')}
                      Value={values.email}
                      Keyboard={'email-address'}
                      outline={COLORS.border_color}
                      mode={'outlined'}
                      label="Email address"
                    />
                    {errors.email && touched.email && (
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'red',
                          marginTop: 5,
                          marginBottom: 5,
                          marginLeft: 15,
                        }}>
                        {errors.email}
                      </Text>
                    )}
                    <Input
                      // right={{name: 'camera',}}
                      iconFunction={() => setPassHide(!passHide)}
                      rightIcon={true}
                      IconName={passHide ? 'eye-outline' : 'eye-off-outline'}
                      Onchange={handleChange('password')}
                      Onblur={handleBlur('password')}
                      Value={values.password}
                      Pass={passHide ? false : true}
                      outline={COLORS.border_color}
                      mode={'outlined'}
                      label="Password"
                      // IconName="check"
                    />
                    {errors.password && touched.password && (
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'red',
                          marginTop: 5,
                          marginBottom: 5,
                          marginLeft: 15,
                        }}>
                        {errors.password}
                      </Text>
                    )}
                  </View>


                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'row',
                      marginVertical: '4%',
                    }}>
                    <ButtonComp
                      btnwidth={'97%'}
                      btnHeight={56}
                      btnText={'login'}
                      justify={'center'}
                      align={'center'}
                      fontSize={16}
                      radius={15}
                      txtwidth={'100%'}
                      txtColor={COLORS.white}
                      color={isValid ? COLORS.primary : COLORS.border_color}
                      enable={!isValid}
                      // press={() => navigation.navigate('profile')}
                      // press={() => setToken()}
                      press={handleSubmit}
                    />
                  </View>



                </View>
              </ScrollView>
            )}
          </SafeArea>
        )}
      </Formik>
    </>
  );
};
