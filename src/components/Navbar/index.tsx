import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Navbar() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStoragePlayer() {
      const user = await AsyncStorage.getItem('@memorygame:player');
      setUserName(user || '');
    }

    loadStoragePlayer();
  },[userName]);

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text style={styles.greeting}>
          Olá,
        </Text>
        <Text style={styles.player}>
          { userName }.
        </Text>
        <Text style={styles.score}>
          Score: XXX
        </Text>
      </View>
    </View>
  )
}