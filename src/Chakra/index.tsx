import * as React from 'react';
import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  ChakraProvider,
} from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';
import theme from './theme';

export default function Example() {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Box p="5" maxW="320px" borderWidth="1px">
          <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
          <Flex align="baseline" mt={2}>
            <Badge bg="salmon">Plus</Badge>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="pink.800"
            >
              Verified &bull; Cape Town
            </Text>
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            Modern, Chic Penthouse with Mountain, City & Sea Views
          </Text>
          <Text mt={2}>$119/night</Text>
          <Flex mt={2} align="center">
            <Box as={MdStar} color="orange.400" />
            <Text ml={1} fontSize="sm">
              <b>4.84</b> (190)
            </Text>
          </Flex>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

// https://chakra-ui.com/docs/styled-system/theme

// 1. extend chakra theme to bring in our brand colors
// 2. Overide a chakra component with custom styles https://chakra-ui.com/docs/styled-system/component-style
