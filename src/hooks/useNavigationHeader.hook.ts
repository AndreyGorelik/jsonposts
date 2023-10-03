import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from 'react';

import { WrapperStackParamList } from '../navigation/AppWrapper';

type HomeScreenNavigationProp = StackNavigationProp<WrapperStackParamList, 'Home'>;

const useNavigationHeader = (navigation: HomeScreenNavigationProp, element: React.ReactNode) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return element;
      },
    });
  }, [element, navigation]);
};

export default useNavigationHeader;
