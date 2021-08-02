import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48x',
    fontWeight: 'bold',
    padding: 16
  };

  return (
    <div className="App" style={style}>
      {name === '리액트' && (<h1>리액트입니다.</h1>)}
    </div>
  );
}

export default App;
