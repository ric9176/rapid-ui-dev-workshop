import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { variant, space, color } from "styled-system";
import { layout } from 'styled-system'


const Box = styled.div`
  ${space}
  ${color}
  ${layout}
`

const buttonStyle = variant({
  key: "buttons",
});
// tasks: 
// 1. Move the rest of these styles into the theme
// 2. Try adding the space and color utils from styled-system to add flexibility
const Button = styled("button")`
  background: white;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 800;
  padding: 16px;
  margin: 16px;
  transition: all 0.2s ease;
  ${buttonStyle};
  // ${space};
`;

Button.defaultProps = {
  variant: "primary",
};

const Wrapper = styled("div")`
  padding: 40px;
  background: ${(props) => props.theme.colors.background};
`;

const VariantsExample = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Box width="2em" height="2em"  mb={4} bg="blue"></Box>
    </Wrapper>
  </ThemeProvider>
);

export default VariantsExample;

// EXAMPLE OF THE as PROP
// import styled from "styled-components";

// const Component = styled.div`
//   color: red;
// `;

// render(
//   <Component
//     as="button"
//     onClick={() => alert('It works!')}
//   >
//     Hello World!
//   </Component>
// )
