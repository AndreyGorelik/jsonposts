import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { styles } from './errorMessage.styles';
const ErrorMessage = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="error-outline" size={54} color="black" />
      <Text>Ooops! Something went wrong</Text>
    </View>
  );
};

export default ErrorMessage;
