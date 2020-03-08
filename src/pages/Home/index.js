import React, {useState} from 'react';
import { View, FlatList } from 'react-native';

import { Container } from './styles';
import ReceitaItem from '../../components/ReceitaItem';
import * as List from '../../Context';
import DataContext from '../../Context/context';

export default function Home( {navigation}) {
  const [list, setList] = useState(List.list)

  function abrirReceita(item){
    navigation.navigate('Receita', {item})
  }

  return (
    <Container>
      <FlatList 
        data={list}
        renderItem={({item})=> <ReceitaItem data={item} onPress={()=> abrirReceita(item)} />}
      />
    </Container>
  );
}
