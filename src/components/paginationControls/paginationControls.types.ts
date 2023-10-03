export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
  goToPage: (arg: number) => void;
}
