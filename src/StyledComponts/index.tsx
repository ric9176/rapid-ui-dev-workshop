import styled from 'styled-components';
import brandColors from '../legacy-styles/export/brandColors.scss';

// 1. We can add global styles here with .attrs
// 2. We can use our sass vars directy here
const Container = styled.div`
  width: 3em;
  height: 3em;
  background-color: ${brandColors.orangeville};
`;

const Box = () => <Container as="button">hello</Container>;

// Note: Using the "as" prop you can switch what is being rendered at runtime,
// super useful when some components should be links/buttons but all styled the same way
// https://styled-components.com/docs/api#as-polymorphic-prop

export default Box;
