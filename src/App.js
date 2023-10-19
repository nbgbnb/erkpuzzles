import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import PuzzleGrid from './components/puzzleBoard/PuzzleGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NBG's puzzle widgets</h1>
      </header>
      <PuzzleGrid x='6' y='6' />
    </div>
  );
}

export default App;
