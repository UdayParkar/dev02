import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import products from '../data/products';
import brands from '../data/brands';
import ProductCard from '../components/ProductCard/ProductCard';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  const topBrands = brands.slice(0, 3);

  return (
    <Container maxW="7xl">
      {/* Hero Section */}
      <Stack spacing={6} align="center" py={10}>
        <Heading as="h1" fontSize={['3xl', '4xl', '5xl']} textAlign="center">
          Discover the Essence of Beauty
        </Heading>
        <Text fontSize="lg" color="gray.600" maxW="2xl" textAlign="center">
          Explore curated skincare, makeup, and fragrances handpicked for your glow.
        </Text>
        <RouterLink to="/shop">
          <Button colorScheme="brand" size="lg">Discover Our Collections</Button>
        </RouterLink>
      </Stack>

      {/* Featured Categories */}
      <Heading mt={10} size="md" mb={4}>
        Featured Categories
      </Heading>
      <SimpleGrid columns={[1, 2, 4]} spacing={6}>
        {['Skincare', 'Makeup', 'Haircare', 'Fragrances'].map((category, index) => (
          <Box
            key={index}
            bg="gray.100"
            height="120px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            borderRadius="md"
          >
            {category}
          </Box>
        ))}
      </SimpleGrid>

      {/* Bestsellers */}
      <Heading mt={10} size="md" mb={4}>
        Bestsellers
      </Heading>
      <SimpleGrid columns={[1, 2, 4]} spacing={6}>
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>

      {/* Premium Brands */}
      <Heading mt={10} size="md" mb={4}>
        Shop Premium Brands
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {topBrands.map(brand => (
          <Box
            key={brand.id}
            p={4}
            border="1px solid #eee"
            borderRadius="md"
            textAlign="center"
          >
            <Image src={brand.logoUrl} alt={brand.name} mx="auto" mb={2} />
            <Text fontWeight="semibold">{brand.name}</Text>
            <Text fontSize="sm" color="gray.600">{brand.description}</Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Philosophy */}
      <Box mt={14} textAlign="center">
        <Heading size="md">Our Philosophy</Heading>
        <Text mt={2} maxW="600px" mx="auto" color="gray.600">
          At AuraBeauty, we believe in celebrating natural beauty with clean, ethical, and luxurious formulations that uplift your self-care rituals.
        </Text>
      </Box>
    </Container>
  );
};

export default HomePage;
