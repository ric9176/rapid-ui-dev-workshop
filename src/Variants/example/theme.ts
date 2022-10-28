import legacyColors from '../../legacy-styles/export/legacyColors.scss';
console.log('🚀 ~ file: theme.js ~ line 2 ~ legacyColors', legacyColors);

const COLOR_BLUE = '#02BAFF';
const COLOR_GREEN = '#3f714c';
const COLOR_BACKGROUND = '#f6f6ff';

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const theme = {
  space,
  colors: {
    blue: legacyColors.darkBlue,
    green: COLOR_GREEN,
    background: COLOR_BACKGROUND,
  },
  buttons: {
    primary: {
      color: COLOR_BLUE,
      // paddingBottom: space[3],
      border: `3px solid ${COLOR_BLUE}`,
      ':hover': {
        backgroundColor: COLOR_BLUE,
        color: 'white',
      },
    },
    secondary: {
      color: COLOR_GREEN,
      border: `3px solid ${COLOR_GREEN}`,
      ':hover': {
        backgroundColor: COLOR_GREEN,
        color: 'white',
      },
    },
  },
};

export default theme;
