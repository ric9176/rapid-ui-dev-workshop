import Header from './Header';
import Container from './StyledComponts';
import ThemingExample from './Theming/example';
import ThemingExcercise from './Theming/exercise';
import VariantsExample from './Variants/example';
import VariantsExcercise from './Variants/exercise';
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
        <Box p={4}>{/* <ThemingExample /> */}</Box>
        <Heading>Exercise 1</Heading>
        <Box>
          <ThemingExcercise />
        </Box>
        <Heading>Variants example</Heading>
        <VariantsExample />
        <Box>
          <VariantsExcercise />
        </Box>
        <Heading>Chakra example</Heading>
        <Box>Chakra theme extension excercise</Box>
      </VStack>

      {/* <ThemedApp /> */}
    </>
  );
}

export default App;
