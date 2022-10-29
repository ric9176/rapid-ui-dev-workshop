import styled from 'styled-components';
import legacyColors from '../legacy-styles/export/legacyColors.scss';

const Container = styled.div.attrs({ className: 'box' })`
  width: 3em;
  height: 3em;
  background-color: ${legacyColors.lightBlue};
`;

const Box = () => <Container as="button">hello</Container>;

// Note: Using the "as" prop you can switch what is being rendered at runtime, super useful when some components should be links/buttons but all styled the same way
// https://styled-components.com/docs/api#as-polymorphic-prop

export default Box;
