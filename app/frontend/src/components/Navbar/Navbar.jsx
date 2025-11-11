import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Spacer,
  Link,
  Badge
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../features/cart/cartSelectors';

const Navbar = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <Box bg="white" boxShadow="md" px={6} py={3} position="sticky" top="0" zIndex="999">
      <Flex align="center">
        <Text fontSize="2xl" fontWeight="bold" color="brand.500">
          AuraBeauty
        </Text>
        <Spacer />
        <HStack spacing={5}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/shop">Shop Now</Link>
          <Link as={RouterLink} to="/brands">Brands</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
          <Link as={RouterLink} to="/cart" position="relative">
            <IconButton
              icon={<FiShoppingCart />}
              variant="ghost"
              aria-label="Cart"
            />
            {cartCount > 0 && (
              <Badge
                colorScheme="pink"
                borderRadius="full"
                position="absolute"
                top="-1"
                right="-1"
                fontSize="0.7rem"
              >
                {cartCount}
              </Badge>
            )}
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
