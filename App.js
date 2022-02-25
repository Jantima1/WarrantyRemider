import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Hello } from './src/screens/SplashScreen';
import { WarrantyDe } from './src/screens/WarrantyDetail';
import {WarrantyList} from './src/screens/Dashboard';

const AppNavigator = createStackNavigator({
  'Warranty Detail' : WarrantyDe 
  // Warranties: WarrantyList
  // 'Warranty Reminder' : Hello
});

export default createAppContainer(AppNavigator);