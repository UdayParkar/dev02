import React from 'react';
import { VStack, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter } from '../../features/products/productSlice';
import PropTypes from 'prop-types';

const CategoryFilter = ({ categories }) => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.products.categoryFilter);

  return (
    <VStack align="start" spacing={2}>
      <Button
        variant={selected === 'All' ? 'solid' : 'ghost'}
        onClick={() => dispatch(setCategoryFilter('All'))}
      >
        All Categories
      </Button>
      {categories.map(category => (
        <Button
          key={category}
          variant={selected === category ? 'solid' : 'ghost'}
          onClick={() => dispatch(setCategoryFilter(category))}
        >
          {category}
        </Button>
      ))}
    </VStack>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  // add other props if needed
};

export default CategoryFilter;
