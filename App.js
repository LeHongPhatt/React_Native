import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home from  './src/Screen/Home';
import Information from './src/Screen/Information';
import Done  from './src/Screen/Done';
import OutNoodle from './src/Screen/OutNoodle';
import Error from './src/Screen/Error';
import Seclect from './src/Screen/Seclect';
import Order from './src/Screen/Oder';
import AllOrder from './src/Screen/AllOrder';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Information" component={Information}/>
        <Stack.Screen options={{headerShown: false}} name="Done" component={Done} />
        <Stack.Screen options={{headerShown: false}} name="OutNoodle" component={OutNoodle}/>
        <Stack.Screen options={{headerShown: false}} name="Error" component={Error}/>
        <Stack.Screen options={{headerShown: false}} name="Seclect" component={Seclect}/>
        <Stack.Screen options={{headerShown: false}} name="Order" component={Order}/>
        <Stack.Screen options={{headerShown: false}} name="AllOrder" component={AllOrder}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;