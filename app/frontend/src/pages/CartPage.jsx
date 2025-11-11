import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartTotal, selectCartItems } from '../features/cart/cartSelectors';
import { removeItemFromCart, updateItemQuantity } from '../features/cart/cartSlice';
import QuantitySelector from '../components/QuantitySelector/QuantitySelector';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const shippingCost = subtotal > 75 ? 0 : 5;
  const total = subtotal + shippingCost;

  const handleRemove = (productId, variant) => {
    dispatch(removeItemFromCart({ productId, variant }));
  };

  const handleQuantityChange = (productId, variant, qty) => {
    dispatch(updateItemQuantity({ productId, variant, quantity: qty }));
  };

  return (
    <Container maxW="6xl">
      <Heading size="lg" mb={6}>Your Shopping Cart</Heading>

      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <Flex direction={['column', null, 'row']} gap={10}>
          <Box flex="3">
            {cartItems.map((item, idx) => (
              <Stack
                key={idx}
                direction="row"
                spacing={4}
                mb={6}
                align="center"
              >
                <Image
                  src={item.imageUrl}
                  boxSize="80px"
                  objectFit="cover"
                  borderRadius="md"
                />
                <Box flex="1">
                  <Text fontWeight="bold">{item.name}</Text>
                  {item.variant && (
                    <Text fontSize="sm" color="gray.500">Variant: {item.variant}</Text>
                  )}
                  <Text fontSize="sm">${item.price.toFixed(2)} each</Text>
                  <QuantitySelector
                    quantity={item.quantity}
                    setQuantity={(q) => handleQuantityChange(item.productId, item.variant, q)}
                    max={10}
                  />
                </Box>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleRemove(item.productId, item.variant)}
                >
                  Remove
                </Button>
              </Stack>
            ))}
          </Box>

          <Box flex="1" p={6} border="1px solid #eee" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold" mb={3}>Order Summary</Text>
            <Divider mb={3} />
            <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
            <Text>Shipping: {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</Text>
            <Divider my={3} />
            <Text fontSize="xl" fontWeight="bold">Total: ${total.toFixed(2)}</Text>
            <Button
              colorScheme="brand"
              width="full"
              mt={4}
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Flex>
      )}
    </Container>
  );
};

export default CartPage;
