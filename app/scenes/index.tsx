import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  APP_SignIN_SCENE,
} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
import SignInScene from './SignInScene';

const scenes = [
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene key={APP_SCENE} component={AppScene} />,
  <Scene initial key={APP_SignIN_SCENE} component={SignInScene} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
