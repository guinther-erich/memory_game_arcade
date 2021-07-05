import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  greeting: {
    fontFamily: theme.fonts.text,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  player: {
    fontFamily: theme.fonts.title,
    fontSize: 24,
    color: theme.colors.heading
  },
  score: {
    fontFamily: theme.fonts.text,
    fontSize: 24,
    color: theme.colors.lighting,
    marginLeft: 20
  }
});