import { useState, useEffect } from 'react';

import { PostCardInterface } from '../store/slices/postsSlice/types';

import { useAppSelector } from './redux.hook';

const usePagination = (itemsPerPage: number) => {
  const { posts } = useAppSelector((state) => state.postsSlice);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<PostCardInterface[]>([]);
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(posts.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, posts]);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  };
};

export default usePagination;
