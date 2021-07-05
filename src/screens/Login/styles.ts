import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 75,
    justifyContent: 'center'
  },
  title: {
    color: theme.colors.lighting,
    fontSize: 75,
    textAlign: 'center',
    fontFamily: theme.fonts.title,
    lineHeight: 75,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: theme.fonts.text
  },
  input: {
    height: 50,
    width: 200,
    textAlign: 'center',
    borderBottomWidth: 2,
    marginBottom: 20,
    marginLeft: 30,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text
  },
});