import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewWarrantyForm, Dashboard, HomeScreen } from './src/screens';
import { FirebaseProvider } from './src/api/firebase';
import 'firebase/compat/database';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FirebaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Warranty Reminder' component={HomeScreen} />
          <Stack.Screen name='Warranties' component={Dashboard} />
          <Stack.Screen name='Add New Warranty' component={NewWarrantyForm} />
          {/* <Stack.Screen name='Edit Warranty Detail' component={EditWarrantyDetail} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </FirebaseProvider>
  );
}