import styled from 'styled-components';

interface Params {
  Left: React.FC;
  Right: React.FC;
}

const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const Panel = styled.div`
  flex: 1;
`;

const SplitScreen: React.FC<Params> = ({ Left, Right }) => {
  return (
    <Container>
      <Panel>
        <Left />
      </Panel>

      <Panel>
        <Right />
      </Panel>
    </Container>
  );
};

export default SplitScreen;
