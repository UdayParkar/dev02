import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Image,
  Text,
  Badge,
  Button,
  VStack,
  HStack
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      p={3}
      bg="white"
    >
      <RouterLink to={`/products/${product.id}`}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          objectFit="cover"
          width="100%"
          height="200px"
          mb={2}
        />
        <VStack spacing={1} align="start">
          <Text fontWeight="semibold">{product.name}</Text>
          <Text fontSize="sm" color="gray.600">{product.brand}</Text>
          <HStack spacing={2}>
            <Text fontWeight="bold">${product.price.toFixed(2)}</Text>
            <Badge colorScheme="green">{product.rating} ★</Badge>
          </HStack>
        </VStack>
      </RouterLink>
      <RouterLink to={`/products/${product.id}`}>
        <Button
          colorScheme="brand"
          size="sm"
          width="100%"
          mt={3}
        >
          View Details
        </Button>
      </RouterLink>
    </Box>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    // add other fields as needed
  }).isRequired,
};

export default ProductCard;
