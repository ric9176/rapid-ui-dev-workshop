import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import { variant, space, SpaceProps, color, ColorProps } from 'styled-system';
import { layout, LayoutProps } from 'styled-system';
import {} from '@chakra-ui/react';

// interface Props extends SpaceProps, ColorProps, LayoutProps {
//   children: React.ReactNode;
// }

type BoxProps = SpaceProps & ColorProps & LayoutProps;
const Box = styled.div<BoxProps>`
  ${space}
  ${color}
  ${layout}
`;

const buttonStyle = variant({
  key: 'buttons',
});
// tasks:
// 1. Move the rest of these styles into the theme
// 2. Try adding the space and color utils from styled-system to add flexibility
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = styled('button')<ButtonProps>`
  background: white;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 800;
  padding: 16px;
  margin: 16px;
  transition: all 0.2s ease;
  ${buttonStyle};
  ${space};
`;

Button.defaultProps = {
  variant: 'primary',
};

const Wrapper = styled('div')`
  padding: 40px;
  background: ${props => props.theme.colors.background};
`;

const VariantsExample = ({ ...props }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Button>Primary Button</Button>
      <Button variant="secondary" {...props}>
        Secondary Button
      </Button>
      <Box width="2em" height="2em" mb={4} bg="blue"></Box>
    </Wrapper>
  </ThemeProvider>
);

export default VariantsExample;
