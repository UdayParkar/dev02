import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useToast
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import QuantitySelector from '../components/QuantitySelector/QuantitySelector';
import ProductVariantSelector from '../components/ProductVariantSelector/ProductVariantSelector';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('');
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!product) return <Text>Product not found</Text>;

  const variant = product.variants?.find(v => v.value === selectedVariant);
  const inStock = variant ? variant.variantStock : product.stock;

  const handleAddToCart = () => {
    if (variant && variant.variantStock === 0) return;

    dispatch(addItemToCart({
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price + (variant?.additionalPrice || 0),
      imageUrl: product.imageUrl,
      quantity,
      variant: variant?.value || null
    }));

    toast({
      title: 'Added to cart.',
      status: 'success',
      duration: 2000,
      isClosable: true
    });

    navigate('/cart');
  };

  return (
    <Container maxW="6xl">
      <Grid templateColumns={['1fr', null, '1fr 1fr']} gap={10}>
        <Box>
          <Image src={product.imageUrl} alt={product.name} borderRadius="md" />
        </Box>

        <Stack spacing={5}>
          <Heading size="lg">{product.name}</Heading>
          <Text fontSize="sm" color="gray.500">{product.brand}</Text>
          <Text fontSize="lg" fontWeight="bold">${(product.price + (variant?.additionalPrice || 0)).toFixed(2)}</Text>
          <Text>Rating: {product.rating} ★</Text>
          <Text color="gray.700">{product.description}</Text>

          {product.variants && (
            <ProductVariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
            />
          )}

          <Text fontWeight="medium" color={inStock > 0 ? 'green.500' : 'red.500'}>
            {inStock > 0 ? 'In Stock' : 'Out of Stock'}
          </Text>

          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
            max={inStock}
          />

          <Button
            colorScheme="brand"
            isDisabled={inStock === 0 || (product.variants && !selectedVariant)}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Stack>
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;
