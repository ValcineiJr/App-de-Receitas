import React from 'react';
import { View, Text, FlatList } from 'react-native';

// import { Container } from './styles';

export default function ReceitaModo( { route }) {
  const { data } = route.params || '';

  function ListarModo({item}){
    return(
      <View style={{flexDirection:'row',}}>
        <Text style={{fontSize:30, color:"#ff6a28", marginRight:10}}>{item.key}</Text>
        <Text style={{fontSize:18, marginVertical:5, color:'#444'}}>{item.txt}</Text>
      </View>
    )
  }

  return (
    <View style={{flex:1, margin:10}}> 
      <Text style={{color:'#ff6a28',fontSize:35,textAlign:'center'}}>Modo de Preparo</Text>       
        <FlatList data={data.modo}
          renderItem={({item}) => <ListarModo item={item} />} keyExtractor={item => item.key} />
    </View>
  );
}
