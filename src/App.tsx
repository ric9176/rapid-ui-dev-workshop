import Header from './Header';
import Container from './StyledComponts';
import ThemingExample from './Theming/example';
import ThemingExcercise from './Theming/exercise';
import VariantsExample from './Variants/example';
import VariantsExcercise from './Variants/exercise';
import StyledSystem from './StyledSystem';
import StyledSystemExample from './StyledSystem/StyledSystemExample';
import ChakraExample from './Chakra';
import { Box, VStack, StackDivider, Heading } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Header />
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        m={6}
      >
        <Heading>Using sass vars in syled components example</Heading>
        <Box p={4}>
          <Container />
        </Box>
        <Heading>Basic Theme Example</Heading>
        <Box p={4}>
          <ThemingExample />
        </Box>
        <Heading>Themeing Excercise</Heading>
        <Box>
          <ThemingExcercise />
        </Box>
        <Heading>Styled System Example</Heading>
        <Box p={4}>
          <StyledSystemExample />
        </Box>
        <Heading>Styled System Excercise</Heading>
        <Box p={4}>
          <StyledSystem />
        </Box>
        <Heading>Variants example</Heading>
        <VariantsExample />
        <Box>
          <VariantsExcercise />
        </Box>
        <Heading>Chakra example</Heading>
        <Box p={4}>
          <ChakraExample />
        </Box>
        <Box p={4}>Chakra theme extension excercise</Box>
      </VStack>
    </>
  );
}

export default App;
