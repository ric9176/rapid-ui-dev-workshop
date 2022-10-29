import styled from 'styled-components';
import legacyColors from '../legacy-styles/export/legacyColors.scss';

const Container = styled.div.attrs({ className: 'box' })`
  width: 3em;
  height: 3em;
  background-color: ${legacyColors.lightBlue};
`;

const Box = () => <Container>hello</Container>;

export default Box;
