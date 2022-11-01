# Getting Started

Clone the repo and run `yarn` for package installs.

Alternatively you can run `npm i` to run installs.

If you have any install issues check your version of Node and update to the latest stable version (easiest way is using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)), If you already have nvm just run `nvm use` in the project directory.

## Available Scripts

In the project directory, run:

#### `yarn start` or `npm start`

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## This repo is the companion to the "Rapid UI Development in React: Harnessing custom component libraries and & design systems" workshop at React Advandced London 2022.

# Folder structure and exercises

In the `src` folder you'll find folders named after the headings on the page. Don't forget to reference the example when completing the exercises 😉

## Theming Exercise

Open the `src/Theming` folder and open up `/excercise`.

Your task is to implement the theme.ts. Follow the code comments for guidance.

1. Wrap the whole component with the `ThemeProvider` from "styled-components".
2. Create a simple theme in `theme.js` and import it. (`import theme from './theme'`). This theme should have the base colors for your app.
3. Implement the colors you have created in `theme.ts` in the styled components to style your card component.

Bonus: Import the brand colors from legacy-styles, add them to your theme and use them also.
Extra bonus: Get TS working for your new theme. Bear in mind you may have ignore it complaining about other files in the project due to multiple theme files ;-)

## Styled System Exercise

Open the `src/StyledSystem` folder and open up `/excercise`

Your task is to add styled system utils for prop based styling to the button styled component.

1. Import the space and color utils from styled-system and apply them to the button styled component.
2. Use the utils to customize styling of the button, try changing the padding, background color and and text color. ref: https://styled-system.com/api
3. Use the styles referenced in the theme.ts for some of the custom styling via styled system utils props, there are both colors and space in the theme. See: https://styled-system.com/theme-specification

## Variants Excercise

Open the `src/Variants` folder and open up `/excercise`

1. Create a cariant called alertStyle
2. In theme.ts add your variants for default, error, sucess and warning
3. Add the variant to your Alert styled component at the end
4. Add default props to the Alert component so the variant prop doesn't have to be passed
   Bonus: Check out the docs to see how to write the variants inline: https://styled-system.com/variants#variants. Try it this way also, which do you like better?

## Chakra Excercise

Open the `src/Chakra` folder and open up `index`

Chakra implement the styled system theme specification that you're now familiar with! https://chakra-ui.com/docs/styled-system/theme

If we are using Chakra, we probably want to customize the default theme.

1. Extend the Chakra theme in theme.ts to bring in our brand colors and apply them to the design, perhaps the background of the badge on line 21 ;-)

Bonus: Overide a chakra component with custom styles https://chakra-ui.com/docs/styled-system/component-style

## Links and documentation

### Design Systems

- [Luna (Sainsbury's)](https://luna.sainsburys.co.uk/)
- [Polaris (Shopify)](https://m2.material.io/design/)
- [Material (Google)](https://polaris.shopify.com/)

### Component Libaries

- [ChakraUI](https://chakra-ui.com/)
- [MUI (Material UI)](https://mui.com/)
- [Ant Design](https://ant.design/)
- [React Bootstrap](https://react-bootstrap.github.io/)

### Styled Components

- [Tagged template literals](https://styled-components.com/docs/api#taggedtemplateliteral)
- [Original post by Max (creator of styled components) on how they use tagged template literals](https://mxstbr.blog/2016/11/styled-components-magic-explained/)
- [Styled components docs](https://styled-components.com/)

### Themeing

- [Styled components themeing docs](https://styled-components.com/docs/advanced#theming)
- [Theme specification](https://styled-system.com/theme-specification/)
- [Chakra approach to themeing with styled system](https://chakra-ui.com/docs/styled-system/theme)

### Styled System

- [Styled System api](https://styled-system.com/api)
- [Build a box](https://styled-system.com/guides/build-a-box)
- [Chakra docs on style props](https://chakra-ui.com/docs/styled-system/style-props)

### RFC template

- [Decent template for starting an RFC](https://slab.com/library/templates/squarespace-rfc-template/)

### Chakra

- [Chakra docs](https://chakra-ui.com/)
- [Chakra comparisions - useful for an RFC!](https://chakra-ui.com/getting-started/comparison)
- [Free EggHead course on building with Chakra](https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106)

### Storybook

- [Storybook Docs](https://storybook.js.org/)
- [Chromatic - Rapid setup for storybook!](https://www.chromatic.com/features/document)
