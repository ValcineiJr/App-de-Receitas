import React from 'react';
import { View, Text, FlatList } from 'react-native';

// import { Container } from './styles';

export default function ReceitaIngredientes( { route }) {
  const { data } = route.params || '';
  return (
    <View style={{flex:1, margin:10}}>   
    <Text style={{color:'#ff6a28',fontSize:35,textAlign:'center', marginBottom:20}}>Ingredientes</Text>      
        <FlatList data={data.ingredientes}  renderItem={({item}) => <Text style={{fontSize:22, marginBottom:10}}> • {item.txt}</Text>} keyExtractor={item => item.key} />
    </View>
  );
}
