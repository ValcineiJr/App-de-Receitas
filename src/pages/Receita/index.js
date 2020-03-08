import React, {useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, TouchableHighlight, Image, Text } from 'react-native';
import BackArrow from '../../assets/img/back.png'
import ReceitaResumo from './Components/ReceitaResumo';
import ReceitaIngredientes from './Components/ReceitaIngredientes';
import ReceitaModo from './Components/ReceitaModo';
import Home from '../../pages/Home'
// import { Container } from './styles';

import * as List from '../../Context';

const Tab = createMaterialTopTabNavigator();

    function MyTabs( { data }) {      
      return (
        <Tab.Navigator
        tabBarOptions={{
          showIcon:false,
          style:{
            backgroundColor:'#eee'
          },
          labelStyle:{
            fontSize:14,
            width:200,
            fontWeight:'bold'
          },
          activeTintColor:'#ff6a28',
          inactiveTintColor:'#888'
        }}>
          <Tab.Screen 
          initialParams={{data}}
          name="Resumo" component={ReceitaResumo} />

          <Tab.Screen 
          initialParams={{data}}
          name="Preparo" component={ReceitaModo} />

          <Tab.Screen
          initialParams={{data}}
          name="Ingredientes" component={ReceitaIngredientes} />
        </Tab.Navigator>
      );
    }
export default function Receita({navigation, route}) {
    const { item } = route.params || '';
    const [list, setList] = useState(List.list)

  navigation.setOptions({
    headerShown: false
  })

  function goBack(){
    navigation.goBack();
  }

  return (
    <View style={{flex:1, marginTop:30}}>
      <TouchableHighlight underlayColor='#ccc' style={{zIndex:99,width:26, height:26, marginLeft:10, marginTop:5}} onPress={goBack}>
        <Image style={{width:26, height:26}} source={BackArrow} />
      </TouchableHighlight>
      <Image source={{uri: item.imagem}} style={{height:200, marginTop:-61,}} />               
          <MyTabs data={item}  />       
    </View>
  );
}
