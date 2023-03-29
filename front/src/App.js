import './App.css';

function App() {
  const goToRedaction = () => {
    window.open('http://localhost:8181/redact', '_blank');
  };
  return (
    <div className='App'>
      <span>ehhehe</span>
      <button onClick={goToRedaction}>Go nowbish</button>
    </div>
  );
}

export default App;
