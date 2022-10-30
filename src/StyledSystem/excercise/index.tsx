import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { space, SpaceProps, color, ColorProps } from 'styled-system';
import {} from '@chakra-ui/react';

// Tasks:
// 1. Import the space and color utils (and others if you like!) from styled-system and apply them to the button.
// 2. Use the styled system utils to customize styling of the button, try changing the padding, background color and and text color. You can reference what's available here: https://styled-system.com/api
// 3. Try to use styles referenced in the theme.ts, we have both colors and space, remember styled system allows you to reference these! See: https://styled-system.com/theme-specification

type ButtonProps = SpaceProps & ColorProps;

const Button = styled('button')<ButtonProps>`
  background: white;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 800;
  padding: 16px;
  margin: 16px;
  transition: all 0.2s ease;
  ${space};
  ${color}
`;

const Wrapper = styled('div')`
  padding: 40px;
`;

const VariantsExample = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Button p={3} color="brandGreen" bg="background">
        Primary Button
      </Button>
    </Wrapper>
  </ThemeProvider>
);

export default VariantsExample;
