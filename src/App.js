
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Saglık from './components/pages/Saglık';
/*import Life from  './components/pages/Life';*/
import Education from  './components/pages/Education';
import World from  './components/pages/World';
import Magazine from  './components/pages/Magazine';
import Covid from './components/pages/Covid';
import Economy from './components/pages/Economy';
import Politics from './components/pages/Politics';
import Interview from './components/pages/Interview';
import Car from './components/pages/Car';
import ArtAndCulture from './components/pages/ArtAndCulture'
import Newsdetails from './components/pages/Newsdetails';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {

  const DrawerStack =()=>{
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Ana Sayfa" component={Home} />
        <Drawer.Screen name="Saglık" component={Saglık} />
        <Drawer.Screen name="Eğitim" component={Education}/>
        <Drawer.Screen name="Dünya" component={World}/>
        <Drawer.Screen name="Araba" component={Car}/>
        <Drawer.Screen name="Ekonomi" component={Economy}/>
        <Drawer.Screen name="Kültür Sanat" component={ArtAndCulture}/>
        <Drawer.Screen name="Siyaset" component={Politics}/>
        <Drawer.Screen name="Interview" component={Interview}/>
        <Drawer.Screen name="Magazin" component={Magazine}/>
        <Drawer.Screen name="Covid-19" component={Covid}/>
        </Drawer.Navigator>

    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={'NewsIn'} component={DrawerStack} options={{ title: 'NewsIn', headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
            fontSize:30
          },
        }}/>
      <Stack.Screen name={'Newsdetails'} component={Newsdetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}