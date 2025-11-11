import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';

const AboutUsPage = () => {
  return (
    <Container maxW="4xl">
      <Heading mb={4}>About AuraBeauty</Heading>
      <Text fontSize="md" color="gray.700" lineHeight="1.8">
        At AuraBeauty, we are passionate about enhancing your natural glow. Our products are formulated with
        carefully chosen ingredients, inspired by nature and backed by science. We believe in sustainability,
        cruelty-free practices, and empowering self-expression. From skincare essentials to statement makeup,
        AuraBeauty is your partner in personalized beauty rituals.
      </Text>
    </Container>
  );
};

export default AboutUsPage;
