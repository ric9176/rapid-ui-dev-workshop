import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { space, SpaceProps, color, ColorProps } from 'styled-system';
import { layout, LayoutProps } from 'styled-system';
import {} from '@chakra-ui/react';

type BoxProps = SpaceProps & ColorProps & LayoutProps;
const Box = styled.div<BoxProps>`
  ${space}
  ${color}
  ${layout}
`;

const VariantsExample = () => (
  <ThemeProvider theme={theme}>
    <Box width="100%" m={4} p={5} bg="blue">
      Feeling boxed in?
    </Box>
  </ThemeProvider>
);

export default VariantsExample;
