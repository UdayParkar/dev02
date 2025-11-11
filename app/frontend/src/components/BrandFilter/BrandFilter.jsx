import React from 'react';
import { VStack, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setBrandFilter } from '../../features/products/productSlice';
import PropTypes from 'prop-types';

const BrandFilter = ({ brands }) => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.products.brandFilter);

  return (
    <VStack align="start" spacing={2}>
      <Button
        variant={selected === 'All' ? 'solid' : 'ghost'}
        onClick={() => dispatch(setBrandFilter('All'))}
      >
        All Brands
      </Button>
      {brands.map(brand => (
        <Button
          key={brand}
          variant={selected === brand ? 'solid' : 'ghost'}
          onClick={() => dispatch(setBrandFilter(brand))}
        >
          {brand}
        </Button>
      ))}
    </VStack>
  );
};

BrandFilter.propTypes = {
  brands: PropTypes.array.isRequired,
  // add other props if needed
};

export default BrandFilter;
