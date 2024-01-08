import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import { LogBox } from 'react-native';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['Warning: ...']);

LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
