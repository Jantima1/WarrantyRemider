import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewWarrantyForm, Dashboard } from './src/screens';
import './api/firebase'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Warranties' component={Dashboard} />
        <Stack.Screen name='Add New Warranty' component={NewWarrantyForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}