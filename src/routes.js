import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home'
import Receita from './pages/Receita'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >

        <Stack.Screen options={({navigation, route}) => ({
          title: 'App de Receitas'
        })}  name="Home" component={Home} />

        <Stack.Screen options={({navigation, route}) => ({
          title: 'Receita'
        })}  name="Receita" component={Receita} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;