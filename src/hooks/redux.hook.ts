import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store/index';
type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
