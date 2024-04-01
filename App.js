import { NavigationContainer } from '@react-navigation/native';
import HomeView from './views/HomeView';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AttractionsListView from './views/AttractionsListView';
import AttractionsDetailsView from './views/AttractionsDetaisView';
import FavoritesListView from './views/FavoritesListView';
import {loadData} from "./utils/GetArtistsData";

const Stack = createNativeStackNavigator();
loadData();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeView} 
          options={{headerShown: false}} 
        />
        <Stack.Screen name="Atrações" component={AttractionsListView} 
          options={{
            headerStyle: {
              backgroundColor: '#94b3c3'
            }, 
            headerTitleStyle: {
              fontWeight: 'bold', color: 'white'
            }
          }}
        />
        <Stack.Screen name="Details" component={AttractionsDetailsView} 
          options={{headerShown: false}} 
        />
        <Stack.Screen name="Favoritos" component={FavoritesListView}  
          options={{
            headerStyle: {
              backgroundColor: '#94b3c3'
            }, 
            headerTitleStyle: {
              fontWeight: 'bold', color: 'white'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
