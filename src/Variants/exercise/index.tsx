import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import { variant } from 'styled-system';

import theme from './theme';

// TODO: create a variant called `alertVariants` and add it to the Alert styled component at the end

// TODO/HINT: Use the interface below for the Alert propss
// interface AlertProps {
//   variant?: 'default' | 'error' | 'success' | 'warning';
// }

const Alert = styled('div')`
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  font-size: 18px;
  margin: 24px;
  font-weight: 800;
  text-align: center;
`;

//NOTE: You can choose to do this inline: https://styled-system.com/variants#variants

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px;
`;

//TODO: add default props to the alert component

// TODO: here you have hints on how the variants should be named...
const VariantsExercise = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Alert>default alert</Alert>
      <Alert>Success alert</Alert>
      <Alert>Error alert</Alert>
      <Alert>Warning alert</Alert>
    </Wrapper>
  </ThemeProvider>
);

export default VariantsExercise;

//Bonus
// 1. Add a default variant for the Alert which would style it in case the variant prop is not passed
// 2. Consider all that common styling in <Alert> is it possible to move that to the theme? what are the tradeoffs of doing so?
