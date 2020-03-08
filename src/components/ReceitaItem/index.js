import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

// import { Container } from './styles';

export default function ReceitaItem({data, onPress}) {
  return (
    <TouchableHighlight underlayColor='#ccc' onPress={onPress}>
        <View style={{height:80, borderBottomWidth: 1, borderColor:'#ccc', flex:1, flexDirection: 'row'}}> 
        <Image style={{height:70, width:100, marginTop:5,marginLeft:10}} resizeMode='contain' source={{uri:data.imagem}} />
        <View style={{marginHorizontal:10,flexDirection: 'column', justifyContent:'center'}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>{data.nome}</Text>
            <Text style={{color:'#999', fontSize:16}}>{data.rendimento} Porções - {data.preparo} Minutos</Text>
        </View>
        </View>
    </TouchableHighlight>
  );
}
