import React, { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, View } from 'react-native';

import { Background } from '../../components/Background';
import { Navbar } from '../../components/Navbar';
import { Card } from '../../components/Card';
import api from '../../services/api';

import { styles } from './styles';

interface CardProps {
  id: string;
  name: string;
  photo: string;
};

export function Game() {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    async function fetchCards(){
      const { data } = await api
      .get('cards');
      setCards(data);
    }

    fetchCards();
  }, []);

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Navbar />
        </View>
        <View style={styles.cards}>
          <FlatList 
            data={cards}
            renderItem={({ item }) => (
              <Card data ={item}/>
            )}
            showsVerticalScrollIndicator={false}
            numColumns={4}
          />
        </View>
      </View>
    </Background>
  );
}