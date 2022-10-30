import { extendTheme } from '@chakra-ui/react';
import brandColors from '../legacy-styles/export/brandColors.scss';

const theme = extendTheme({
  colors: {
    brand: {
      ...brandColors,
    },
  },
});

export default theme;
