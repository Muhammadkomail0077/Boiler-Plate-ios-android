import React, { useState } from 'react';
import {View} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {Button, Text} from 'react-native-paper';

export const AudioRecording = () => {
  const audioRecorderPlayer = new AudioRecorderPlayer();
  const [state, setState] = useState()

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      setState({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
      return;
    });
    console.log(result);
    console.log('state: ',state);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setState({
      recordSecs: 0,
    });
    console.log(result);
    console.log('state: ',state);
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
      return;
    });
    console.log('state: ',state);
  };

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setState()
  };

  return (
    <>
      <View>
        <Button
          mode="contained"
          onPress={() => {
            onStartRecord();
          }}>
          onStartRecord
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            onStopRecord();
          }}>
          onStopRecord
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            onStartPlay();
          }}>
          onStartPlay
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            onPausePlay();
          }}>
          onPausePlay
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            onStopPlay();
          }}>
          onStopPlay
        </Button>
      </View>
    </>
  );
};
