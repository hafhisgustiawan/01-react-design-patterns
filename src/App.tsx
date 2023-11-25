import SplitScreen from './components/SplitScreen';

const LeftSideComponents: React.FC = () => {
  return <h2>I am left</h2>;
};

const RightSideComponents: React.FC = () => {
  return <h2>I am right</h2>;
};

function App() {
  return (
    <SplitScreen
      Left={LeftSideComponents}
      Right={RightSideComponents}
    ></SplitScreen>
  );
}

export default App;
