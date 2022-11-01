import React from 'react';
import styled from 'styled-components';
// import theme from './theme';

/*
  Exercise TODO:
  - Wrap the whole component with the `ThemeProvider` from "styled-components".
  - create a simple theme in `theme.js` and import it. (`import theme from './theme'`)
  - this theme should have the base colors for your app.
*/

/*
  Remember that you can call a function inside styled-components:
  color: ${props => YOUR EXPRESSION};
  Try adding a background color from the theme!
*/
const Card = styled('div')`
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: 800;
  text-align: center;
`;

/*
  In this component just use the background color from the theme and asign it to this component
*/
const Wrapper = styled('div')`
  padding: 40px;
`;

/*
  TODO: you need to "wrap" your component with the `ThemeProvider` component
  - remember that you need to pass a `theme` to this provider.
  - documentation:
*/

const ThemingExercise = () => (
  <Wrapper>
    <Card>Hello I'm a Card</Card>
  </Wrapper>
);

export default ThemingExercise;

// Bonus
// 1. Import the legacy theme colors into your theme.ts and use them
// 2. Get TypeScript to infer the types in your theme (you'll have to ignore it compaining complaining about other files)
// 3. Try extending your theme by adding some base styles as we saw in the presentation.
