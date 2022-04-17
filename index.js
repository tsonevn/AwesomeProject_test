/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Leanplum } from "@leanplum/react-native-sdk";
import { Alert } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const isDevelopmentMode = true;
if (isDevelopmentMode) {
    Leanplum.setAppIdForDevelopmentMode("<app_id>", "<dev_key>");
  } else {
    Leanplum.setAppIdForProductionMode("<app_id>", "<prod_key>");
  }
  Leanplum.onStartResponse((success) => {
    const alertTitle = success
    ? 'Leanplum session started'
    : 'Leanplum session not started';
    Alert.alert(alertTitle);
    if(success){
        Leanplum.registerForRemoteNotifications()
        Leanplum.setUserId("<user_id>");
    }
  });
  Leanplum.start();
AppRegistry.registerComponent(appName, () => App);
