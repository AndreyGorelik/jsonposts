import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Menu, MenuItem } from 'react-native-material-menu';

import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { changeFilter } from '../../store/slices/postsSlice/postsSlice';
import { SortOrder } from '../../store/slices/postsSlice/types';

import { SortOrderVariants } from './fitlerMenu.data';

const FilterMenu = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.postsSlice);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const getTextColor = (order: SortOrder) => (filter === order ? 'gray' : 'black');

  const selectMenu = (order: SortOrder) => {
    setVisible(false);
    dispatch(changeFilter(order));
  };

  return (
    <>
      <Menu
        visible={visible}
        anchor={
          <TouchableOpacity onPress={showMenu}>
            <AntDesign name="filter" size={30} color="black" />
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={() => selectMenu(SortOrderVariants.DESC)}>
          <AntDesign name="arrowup" size={14} color={getTextColor(SortOrderVariants.DESC)} />
          <Text style={{ color: getTextColor(SortOrderVariants.DESC) }}>ID</Text>
        </MenuItem>
        <MenuItem onPress={() => selectMenu(SortOrderVariants.ASC)}>
          <AntDesign name="arrowdown" size={14} color={getTextColor(SortOrderVariants.ASC)} />
          <Text style={{ color: getTextColor(SortOrderVariants.ASC) }}>ID</Text>
        </MenuItem>
        <MenuItem onPress={() => selectMenu(SortOrderVariants.TITLE)}>
          <Text style={{ color: getTextColor(SortOrderVariants.TITLE) }}>Title (A to Z)</Text>
        </MenuItem>
        <MenuItem onPress={() => selectMenu(SortOrderVariants.DESCRIPTION)}>
          <Text style={{ color: getTextColor(SortOrderVariants.DESCRIPTION) }}>
            Description (A to Z)
          </Text>
        </MenuItem>
      </Menu>
    </>
  );
};

export default FilterMenu;
