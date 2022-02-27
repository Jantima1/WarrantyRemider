import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {WarrantyList} from './src/screens/Dashboard';
import { newWarrantyForm } from './src/screens/addNewWarranty'

const AppNavigator = createStackNavigator({
  // 'Warranty Detail' : WarrantyDe, 
  // Warranties: WarrantyList
  // 'Warranty Reminder' : Hello,
  'Add New Warranty': newWarrantyForm
});

export default createAppContainer(AppNavigator);