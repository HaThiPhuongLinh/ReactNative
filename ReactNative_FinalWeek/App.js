import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store'; 
import Home from './Home'; 
import DetailsProduct from './DetailsProduct'; 
import ProductsAPI from './ProductsAPI'; 
import AddNewBike from './AddNewBike'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductsAPI" component={ProductsAPI} />
          <Stack.Screen name="DetailsProduct" component={DetailsProduct} />
          <Stack.Screen name="AddNewBike" component={AddNewBike} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
