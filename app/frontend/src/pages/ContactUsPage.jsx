import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  VStack,
  useToast
} from '@chakra-ui/react';

const ContactUsPage = () => {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you shortly.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Container maxW="4xl">
      <Text fontSize="2xl" mb={4}>Contact Us</Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={form.name} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={form.email} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Input name="subject" value={form.subject} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" value={form.message} onChange={handleChange} />
          </FormControl>

          <Button type="submit" colorScheme="brand">Send Message</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ContactUsPage;
