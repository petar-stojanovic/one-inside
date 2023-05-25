import "./App.css";
import FlipCard from "./FlipCard/FlipCard"

function App() {
  return (
    <div>
      <div className="App">
        <div className="card-list">
          <FlipCard key={1} />
        </div>
      </div>
    </div>
  );
}

export default App;
