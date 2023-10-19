import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import PuzzleGrid from './components/puzzleBoard/PuzzleGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PuzzleGrid x='6' y='6' />
      </header>
    </div>
  );
}

export default App;
