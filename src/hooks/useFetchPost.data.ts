import { useEffect } from 'react';

import { fetchPosts } from '../store/slices/postsSlice/postsSlice';

import { useAppDispatch } from './redux.hook';

const useFetchPosts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
};

export default useFetchPosts;
