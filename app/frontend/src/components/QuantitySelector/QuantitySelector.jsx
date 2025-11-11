import React from 'react';
import PropTypes from 'prop-types';
import { HStack, IconButton, Input } from '@chakra-ui/react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const QuantitySelector = ({ quantity, setQuantity, max }) => {
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    if (quantity < max) setQuantity(quantity + 1);
  };

  return (
    <HStack maxW="150px">
      <IconButton
        icon={<FiMinus />}
        onClick={handleDecrease}
        size="sm"
        aria-label="Decrease quantity"
      />
      <Input
        value={quantity}
        onChange={(e) =>
          setQuantity(Math.min(max, Math.max(1, Number(e.target.value) || 1)))
        }
        type="number"
        size="sm"
        textAlign="center"
      />
      <IconButton
        icon={<FiPlus />}
        onClick={handleIncrease}
        size="sm"
        aria-label="Increase quantity"
      />
    </HStack>
  );
};

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
};

export default QuantitySelector;
