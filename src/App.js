import logo from './logo.svg';
import './App.css';
import { maxSubArray } from './MaxSubArray';

function App() {
  const result = maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
  return (
    <div className="App">

      <div>Max Array Sum :{result}</div>
    </div>
  );
}

export default App;
