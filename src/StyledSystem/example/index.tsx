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

const Wrapper = styled('div')`
  padding: 40px;
`;

const VariantsExample = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Box width="100%" m={2} p={4} bg="blue">
        Feeling boxed in?
      </Box>
    </Wrapper>
  </ThemeProvider>
);

export default VariantsExample;
