import { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';

import Divider from '../../components/divider/divider.components';
import ErrorMessage from '../../components/errorMessage/errorMessage.component';
import FilterMenu from '../../components/filterMenu/filterMenu.component';
import PaginationControls from '../../components/paginationControls/paginationControls.component';
import PostCard from '../../components/postCard/postCard.component';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import useFetchPosts from '../../hooks/useFetchPost.data';
import useNavigationHeader from '../../hooks/useNavigationHeader.hook';
import usePagination from '../../hooks/usePagination.hook';
import { fetchPosts } from '../../store/slices/postsSlice/postsSlice';
import { PostCardInterface } from '../../store/slices/postsSlice/types';

import { styles } from './home.styles';
import { HomeProps } from './home.types';

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const { isError, isLoading } = useAppSelector((state) => state.postsSlice);
  const dispatch = useAppDispatch();

  useNavigationHeader(navigation, <FilterMenu />);
  useFetchPosts();

  const { currentItems, nextPage, prevPage, totalPages, currentPage, goToPage } = usePagination(10);

  const filteredPosts = currentItems?.filter((item: PostCardInterface) => {
    if (
      item.title.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
      item.body.toLowerCase().trim().includes(search.toLowerCase().trim())
    )
      return item;
  });

  const renderPost = ({ item }: { item: PostCardInterface }) => {
    return <PostCard data={item} />;
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        style={styles.homeSearchInput}
      />
      {filteredPosts.length === 0 && currentItems.length !== 0 && <Text>Posts not found</Text>}
      {isError && <ErrorMessage />}
      <FlatList
        data={filteredPosts}
        renderItem={renderPost}
        ItemSeparatorComponent={() => <Divider />}
        refreshing={isLoading}
        onRefresh={() => dispatch(fetchPosts())}
      />

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
        goToPage={goToPage}
      />
    </View>
  );
};

export default HomeScreen;
