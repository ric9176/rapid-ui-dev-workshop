import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { variant } from 'styled-system';

import theme from './theme';

// TODO: create a variant called `alertStyle`
/*
  in order to add these new variant styles to your component,
  you need to add it to your styles AT THE END.

  *if you have questions why at the end ask us!
*/

interface AlertProps {
  variant?: 'default' | 'error' | 'success' | 'warning';
}

const alertVariants = variant({
  key: 'alerts',
});

const Alert = styled('div')<AlertProps>`
  ${alertVariants}
`;

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px;
`;

// TODO: here you have hints on how the variants should be named...
const VariantsExercise = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Alert variant="default">default alert</Alert>
      <Alert variant="success">Success alert</Alert>
      <Alert variant="error">Error alert</Alert>
      <Alert variant="warning">Warning alert</Alert>
    </Wrapper>
  </ThemeProvider>
);

export default VariantsExercise;

//Bonus
// 1. Add a default variant for the Alert which would style it in case the variant prop is not passed
// 2. Consider all that common styling in <Alert> is it possible to move that to the theme? what are the tradeoffs of doing so?
