import React from 'react';
import { Image, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';

interface CardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export const Card = ({ data, ...rest} : CardProps) => {
  return(
    <RectButton
      style={styles.container}
      {...rest}
    >
      <Image
        style={styles.image}
        source={{ uri: data.photo }} 
        width={80} 
        height={105}
      />
      <Text style={styles.text}>
        { data.name }
      </Text>
    </RectButton>
  )
}