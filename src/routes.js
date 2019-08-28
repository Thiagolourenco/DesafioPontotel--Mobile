import {createAppContainer, createStackNavigator} from 'react-navigation';

import Initial from './pages/initial';
import Main from './pages/main';

export default createAppContainer(
  createStackNavigator(
    {
      Initial,
      Main,
    },
    {initialRouteName: 'Main'},
  ),
);
