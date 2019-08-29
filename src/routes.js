import {createAppContainer, createStackNavigator} from 'react-navigation';

import Initial from './pages/initial';
import Main from './pages/main';
import About from './pages/about';

export default createAppContainer(
  createStackNavigator(
    {
      Initial,
      Main,
      About,
    },
    {initialRouteName: 'Main'},
  ),
);
