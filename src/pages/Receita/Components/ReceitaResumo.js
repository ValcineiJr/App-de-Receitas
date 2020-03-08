import React from 'react';
import { View, Text, Image } from 'react-native';
import * as List from '../../../Context';
// import { Container } from './styles';

export default function ReceitaResumo( { route }) {
  const { data } = route.params || '';
  return (
    <View style={{flex:1, margin:10, alignItems:'center'}}>        
        <Text style={{fontSize:30, marginBottom:10}}>{data.nome}</Text>
        <Text style={{fontSize:20,marginBottom:10, color:"red"}}>Autor: {data.por}</Text>
        <Text style={{fontSize:18}}>{data.descricao}</Text>
        <Image style={{width:'80%', height:'80%', marginTop:10}} source={{uri: data.imagem}} />
    </View>
  );
}
