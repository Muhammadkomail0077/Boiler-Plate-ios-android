import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import COLORS from '../../../Assets/Style/Color';
import {useSelector} from 'react-redux';
import {Pressable} from 'react-native';

export default function Input(props) {
  const emptyIcon = () => null;
  const [text, setText] = useState();

  const reducerData = useSelector(state => state);
//   const [isdark, setisDark] = useState(reducerData?.isDark?.isdark);
  return (
    <>
      {/* role =1 for disabled with place holder */}

      <TextInput
        mode={props.mode}
        label={props.label}
        placeholder={props.placeholder}
        disabled={props.status}
        outlineColor={props.outline}
        ref={props.ref}
        maxLength={props.length}
        right={
          props.rightIcon ? (
            <TextInput.Icon
              onPress={props.iconFunction}
              icon={props.IconName}
              color={props.IconColor}
            />
          ) : (
            emptyIcon
          )
        }
        onChangeText={props.Onchange}
        onBlur={props.Onblur}
        value={props.Value}
        keyboardType={props.Keyboard}
        secureTextEntry={props.Pass}
        activeOutlineColor={
          props.activeOutlineColor ? props.activeOutlineColor : COLORS.primary
        }
        multiline={props.multiline}
        numberOfLines={props.line}
        theme={
          reducerData?.isDark?.isdark
            ? {
                colors: {
                  placeholder: COLORS.bgcolor,
                  text: COLORS.white,
                },
              }
            : {
                colors: {
                  placeholder: COLORS.placholder,
                  text: COLORS.dark,
                },
                roundness: 15,
              }
        }
        style={{
          width: props.width,
          marginTop: props.top,
          backgroundColor: reducerData?.isDark?.isdark
            ? COLORS.darkMode
            : COLORS.bgcolor,
        }}
      />
    </>
  );
}
