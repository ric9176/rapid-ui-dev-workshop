import { Box, Icon, Spacer, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Header = () => (
  <Flex as="nav" bg="teal.500" p="1rem">
    <Box p="2">
      <Heading size="md">
        Rapid UI Development in React: Harnessing custom component libraries and
        & design systems
      </Heading>
    </Box>
    <Spacer />
    <Box>
      <Link href="https://github.com/ric9176/rapid-ui-dev-workshop">
        <Icon w={6} h={6} as={FaGithub} m={2} />
      </Link>
    </Box>
  </Flex>
);

export default Header;
