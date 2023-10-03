export interface PostCardInterface {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type SortOrder = 'asc' | 'desc' | 'title' | 'description';

export interface PostsReducerState {
  isLoading: boolean;
  isError: boolean;
  posts: PostCardInterface[];
  filter: SortOrder;
}
