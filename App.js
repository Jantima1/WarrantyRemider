import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Hello } from './src/screens/SplashScreen';
import { WarrantyDe } from './src/screens/WarrantyDetail';
import {WarrantyList} from './src/screens/Dashboard';
import {ProgressIndicator} from './src/screens/ActivityIndicator'

const AppNavigator = createStackNavigator({
  // 'Warranty Detail' : WarrantyDe 
  // Warranties: WarrantyList
  // 'Warranty Reminder' : Hello
  'Progress' : ProgressIndicator
});

export default createAppContainer(AppNavigator);