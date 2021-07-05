import React, { useState } from 'react';
import { 
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text, 
  TextInput, 
  View 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import logoImg from '../../assets/illustration.png';
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';

export function Login() {
  const [player, setPlayer] = useState('');

  const navigation = useNavigation();

  async function handleLogin() {
    if(!player)
    return Alert.alert('É necessário informar um nome ou apelido para começar o jogo.');

    await AsyncStorage.setItem('@memorygame:player', player);

    navigation.navigate('Game');
  }

  return (
    <Background>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={ Platform.OS == 'ios' ? 'padding' : 'height' }
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Memory {'\n'}
            Game {'\n'}
            Arcade
          </Text>

          <View style={styles.content}>
            <Text style={styles.subtitle}>
              Para jogar, insira seu nome:
            </Text>

            <TextInput 
              style={styles.input}
              onChangeText={setPlayer}
            />

            <Text style={styles.subtitle}>
              e clique no botão abaixo.
            </Text>

            <ButtonIcon 
              title="Começar o jogo!"
              onPress={(handleLogin)}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
}