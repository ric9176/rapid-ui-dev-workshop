import { extendTheme } from '@chakra-ui/react';
import legacyColors from '../legacy-styles/export/legacyColors.scss';

const theme = extendTheme({
  colors: {
    brand: {
      legacyColors,
    },
  },
});

export default theme;
