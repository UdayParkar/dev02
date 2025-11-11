import React from 'react';
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Link
} from '@chakra-ui/react';
import brands from '../data/brands';
import { Link as RouterLink } from 'react-router-dom';

const PremiumBrandsPage = () => {
  return (
    <Container maxW="6xl">
      <Heading mb={6}>Our Curated Brands</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {brands.map((brand) => (
          <Box
            key={brand.id}
            border="1px solid #eee"
            p={4}
            borderRadius="md"
            textAlign="center"
          >
            <Image src={brand.logoUrl} alt={brand.name} mb={3} mx="auto" />
            <Text fontWeight="bold">{brand.name}</Text>
            <Text fontSize="sm" color="gray.600" mb={3}>
              {brand.description}
            </Text>
            <Link as={RouterLink} to="/shop">
              Shop {brand.name}
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default PremiumBrandsPage;
