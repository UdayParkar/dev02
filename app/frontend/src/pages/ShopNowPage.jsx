import React from 'react';
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectFilteredSortedProducts } from '../features/products/productSelectors';
import products from '../data/products';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import BrandFilter from '../components/BrandFilter/BrandFilter';
import ProductCard from '../components/ProductCard/ProductCard';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/products/productSlice';

const ShopNowPage = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredSortedProducts);
  const uniqueCategories = [...new Set(products.map(p => p.category))];
  const uniqueBrands = [...new Set(products.map(p => p.brand))];

  const handleSearch = e => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <Container maxW="7xl">
      <Heading size="lg" mb={6}>Explore Products</Heading>
      <Grid templateColumns={['1fr', null, '250px 1fr']} gap={8}>
        {/* Filters */}
        <GridItem>
          <Stack spacing={6}>
            <CategoryFilter categories={uniqueCategories} />
            <BrandFilter brands={uniqueBrands} />
          </Stack>
        </GridItem>

        {/* Products */}
        <GridItem>
          <Stack spacing={4}>
            <Stack direction="row" justify="space-between" align="center">
              <Input
                placeholder="Search products..."
                onChange={handleSearch}
                maxW="300px"
              />
              <SortDropdown />
            </Stack>

            <Grid templateColumns={['1fr', '1fr 1fr', 'repeat(4, 1fr)']} gap={6}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ShopNowPage;
