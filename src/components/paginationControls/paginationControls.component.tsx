import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './paginationControls.styles';
import { PaginationControlsProps } from './paginationControls.types';

const PAGES_BUTTONS_SIZE = 27;
const PAGES_BUTTONS_COLOR = 'black';

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  prevPage,
  nextPage,
  goToPage,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <TouchableOpacity key={i} onPress={() => goToPage(i)}>
          <Text style={[styles.pagesText, { fontWeight: i === currentPage ? '600' : undefined }]}>
            {i}
          </Text>
        </TouchableOpacity>
      );
    }

    return pageNumbers;
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={prevPage}>
        <Feather name="arrow-left-circle" size={PAGES_BUTTONS_SIZE} color={PAGES_BUTTONS_COLOR} />
      </TouchableOpacity>
      {renderPageNumbers()}
      <TouchableOpacity onPress={nextPage}>
        <Feather name="arrow-right-circle" size={PAGES_BUTTONS_SIZE} color={PAGES_BUTTONS_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default PaginationControls;
