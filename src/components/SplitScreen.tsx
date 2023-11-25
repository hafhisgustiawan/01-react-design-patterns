import styled from 'styled-components';

interface Props {
  // Left: React.FC;
  // Right: React.FC;
  leftWidth: number;
  rightWidth: number;
  children: React.ReactNode[];
}

interface PanelProps {
  flex: number;
}

const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const Panel = styled.div<PanelProps>`
  flex: ${(props) => props.flex};
`;

const SplitScreen: React.FC<Props> = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}) => {
  const [left, right] = children;

  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;
