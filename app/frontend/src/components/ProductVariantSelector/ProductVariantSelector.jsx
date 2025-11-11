import React from 'react';
import {
  Box,
  Text,
  Radio,
  RadioGroup,
  VStack
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ProductVariantSelector = ({ variants, selectedVariant, setSelectedVariant }) => {
  if (!variants || variants.length === 0) return null;

  const variantType = variants[0].type;

  return (
    <Box>
      <Text fontWeight="semibold" mb={1}>Choose {variantType}:</Text>
      <RadioGroup
        onChange={setSelectedVariant}
        value={selectedVariant}
      >
        <VStack align="start">
          {variants.map((v, index) => (
            <Radio key={index} value={v.value}>
              {v.value} {v.additionalPrice ? `(+ $${v.additionalPrice})` : ''}
              {v.variantStock === 0 && ' (Out of stock)'}
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
    </Box>
  );
};

ProductVariantSelector.propTypes = {
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.string,
      additionalPrice: PropTypes.number,
      variantStock: PropTypes.number,
      // add other fields as needed
    })
  ).isRequired,
  selectedVariant: PropTypes.string.isRequired,
  setSelectedVariant: PropTypes.func.isRequired,
};

export default ProductVariantSelector;
