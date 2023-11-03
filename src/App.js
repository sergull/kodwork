import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteList from './Pages/FavoriteList';
import JobsList from './Pages/JobsList';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Detail from './Pages/Detail';
import JobList from './Pages/JobsList/JobsList';
import FavProvider from './context/favProvider';
import FavDetail from './Pages/FavDetail/FavDetail';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

function App() {

  const JobStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Job' component={JobList} />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    );
  }

  const FavStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Favorite' component={FavoriteList} />
        <Stack.Screen name='FavDetail' component={FavDetail} />
      </Stack.Navigator>
    );
  }


  return (
    <FavProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Jobs' >
          <Drawer.Screen name="Jobs" component={JobStack} options={{ drawerActiveTintColor: "orangered", headerTintColor: "orangered" }} />
          <Drawer.Screen name="Favorites" component={FavStack} options={{ drawerActiveTintColor: "orangered", headerTintColor: "orangered", headerTitleStyle: { fontSize: 20 }, }} />
        </Drawer.Navigator>
      </NavigationContainer>
      </FavProvider>
  );

  // return(
  //    <NavigationContainer>
  //      <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name='Login' component={Login} />
  //      </Stack.Navigator>
  //  </NavigationContainer>
  // )
}


export default App;
