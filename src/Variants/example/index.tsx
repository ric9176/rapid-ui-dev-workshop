import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import { variant, space, SpaceProps, color, ColorProps } from 'styled-system';
import {} from '@chakra-ui/react';

type StyleProps = SpaceProps & ColorProps;

interface ButtonProps extends StyleProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const buttonStyle = variant({
  key: 'buttons',
  // prop: 'variant', //NOTE: You can change the name of the variant prop, it defaults to vairant if omitted
});

const Button = styled('button')<ButtonProps>`
  background: white;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 800;
  padding: 16px;
  margin: 16px;
  transition: all 0.2s ease;
  ${buttonStyle};
  ${color};
  ${space}
`;

Button.defaultProps = {
  variant: 'primary',
};

const Wrapper = styled('div')`
  padding: 40px;
  background: ${props => props.theme.colors.background};
`;

const VariantsExample = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </Wrapper>
  </ThemeProvider>
);

export default VariantsExample;
