import React from 'react';
import {
  Button,
  Container,
  Heading,
  Text
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const generateOrderId = () => {
  return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

const OrderConfirmationPage = () => {
  const orderId = generateOrderId();

  return (
    <Container maxW="4xl" textAlign="center" py={10}>
      <Heading size="lg" mb={4}>Thank You for Your AuraBeauty Order!</Heading>
      <Text fontSize="lg" mb={4}>Your order has been placed successfully.</Text>
      <Text mb={6}>Order ID: <strong>{orderId}</strong></Text>
      <RouterLink to="/">
        <Button colorScheme="brand">Continue Shopping</Button>
      </RouterLink>
    </Container>
  );
};

export default OrderConfirmationPage;
