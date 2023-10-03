import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/home.screen';

export type WrapperStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<WrapperStackParamList>();

const HEADER_RIGHT_PADDING = 10;

const AppWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'JSON posts',
            headerRightContainerStyle: {
              paddingHorizontal: HEADER_RIGHT_PADDING,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppWrapper;
