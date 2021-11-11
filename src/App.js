import './App.css';
import { Card1, Card2, Card3 } from './components';
import { colors } from './random';

function App() {
  return (
    <div style={div}>
      <Card3 />
      <Card2 />
      <Card1 />
    </div>
  );
}

export default App;
const div = {
  backgroundColor: colors.background.secondary
}