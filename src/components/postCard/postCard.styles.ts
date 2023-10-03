import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    width: '70%',
  },
  id: {
    width: '30%',
    alignItems: 'flex-end',
  },
  description: {
    flex: 1,
  },
  textHeader: {
    fontWeight: '700',
    fontSize: 17,
  },
});
