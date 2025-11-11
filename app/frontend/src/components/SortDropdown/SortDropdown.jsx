import React from 'react';
import { Select } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setSortOption } from '../../features/products/productSlice';

const SortDropdown = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setSortOption(e.target.value));
  };

  return (
    <Select placeholder="Sort By" onChange={handleChange} maxW="200px">
      <option value="PRICE_LOW_HIGH">Price: Low to High</option>
      <option value="PRICE_HIGH_LOW">Price: High to Low</option>
      <option value="NAME_AZ">Name: A-Z</option>
      <option value="RATING_HIGH_LOW">Rating: High to Low</option>
    </Select>
  );
};

export default SortDropdown;
