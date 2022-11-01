import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { variant } from 'styled-system';

import theme from './theme';

// TODO: create a variant called `alertStyle`
/*
  in order to add these new variant styles to your component,
  you need to add it to your styles AT THE END.

*/

interface AlertProps {
  variant?: 'default' | 'error' | 'success' | 'warning';
}

const alertVariants = variant({
  scale: 'alerts',
  // prop: 'variant', //NOTE: You can change the name of the variant prop, it defaults to vairant if omitted
});

const Alert = styled('div')<AlertProps>`
  // styles in css
  ${alertVariants}
`;

//NOTE: You can choose to do this inline: https://styled-system.com/variants#variants
// const Alert = styled('div')<AlertProps>(
//   {
//     borderRadius: '8px',
//     padding: '8px',
//     boxShadow:
//       '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14) 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
//     fontSize: '18px',
//     margin: '24px',
//     fontWeight: '800',
//     textAlign: 'center',
//   },
//   variant({
//     variants: {
//       scale: 'alerts',
//       default: {
//         backgroundColor: '#0984e3',
//       },
//       success: {
//         backgroundColor: '#00b894',
//       },
//       error: {
//         backgroundColor: '#d63031',
//       },
//       warning: {
//         backgroundColor: '#fdcb6e',
//       },
//     },
//   })
// );

// OR inline with template literals:

// const Alert = styled.div<AlertProps>`
// // common styles in css
// ${variant({
//   variants: {
//     scale: 'alerts',
//     default: {
//       backgroundColor: '#0984e3',
//     },
//     success: {
//       backgroundColor: '#00b894',
//     },
//     error: {
//       backgroundColor: '#d63031',
//     },
//     warning: {
//       backgroundColor: '#fdcb6e',
//     },
//   },
// )}
// `

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px;
`;

//TODO: add default props to the alert component

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
