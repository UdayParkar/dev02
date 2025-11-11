import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { selectCartTotal } from '../features/cart/cartSelectors';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subtotal = useSelector(selectCartTotal);
  const shipping = subtotal > 75 ? 0 : 5;
  const total = subtotal + shipping;

  const [form, setForm] = useState({
    fullName: '',
    address1: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    payment: 'card'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const placeOrder = async () => {
  try {
    const orderData = {
      ...form,
      items: JSON.parse(localStorage.getItem('cartItems') || '[]'), // or use Redux cart state
      subtotal,
      shipping,
      total
    };

const response = await fetch('http://backend-aurabeauty:5000/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(orderData)
});


    if (!response.ok) {
      throw new Error('Failed to place order');
    }

    dispatch(clearCart());
    navigate('/order-confirmation');
  } catch (error) {
    console.error('Error placing order:', error);
    alert('Something went wrong while placing the order.');
  }
};

  return (
    <Container maxW="5xl">
      <Heading mb={6}>Checkout</Heading>

      {/* Shipping Info */}
      <Box mb={6}>
        <Text fontWeight="semibold" mb={3}>Shipping Information</Text>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input name="fullName" value={form.fullName} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input name="address1" value={form.address1} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input name="city" value={form.city} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>State</FormLabel>
            <Input name="state" value={form.state} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Postal Code</FormLabel>
            <Input name="postalCode" value={form.postalCode} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <Input name="country" value={form.country} onChange={handleChange} />
          </FormControl>
        </Stack>
      </Box>

      {/* Payment */}
      <Box mb={6}>
        <Text fontWeight="semibold" mb={3}>Payment Method</Text>
        <RadioGroup onChange={(val) => setForm({ ...form, payment: val })} value={form.payment}>
          <Stack spacing={2}>
            <Radio value="card">Credit Card (Simulated)</Radio>
            <Radio value="paypal">PayPal (Simulated)</Radio>
            <Radio value="afterpay">Afterpay (Simulated)</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      {/* Summary */}
      <Box p={5} border="1px solid #eee" borderRadius="md">
        <Text mb={2}>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text mb={2}>Shipping: {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</Text>
        <Text fontWeight="bold" fontSize="lg">Total: ${total.toFixed(2)}</Text>
        <Button mt={4} colorScheme="brand" onClick={placeOrder}>
          Place Order
        </Button>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
