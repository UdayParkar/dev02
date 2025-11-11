import React from 'react';
import { Box, Text, Stack, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.50" py={6} mt={10} borderTop="1px solid #eee">
      <Stack direction="column" align="center" spacing={2}>
        <Text fontSize="lg" fontWeight="semibold">AuraBeauty</Text>
        <Stack direction="row" spacing={4}>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Returns</Link>
        </Stack>
        <Text fontSize="sm" color="gray.500">© {new Date().getFullYear()} AuraBeauty. All rights reserved.</Text>
      </Stack>
    </Box>
  );
};

export default Footer;
