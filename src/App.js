import logo from "./logo.png"
import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <div className="container"> 
      <header className="App-header"> 
      <img src = {logo} className="App-logo img-fluid" alt="logo"/>
      </header>
    <main>
    <div className="form-intro text-center"> Searching for a meaning? Look it up!</div>
      <Dictionary word="solidarity"/>
    </main>
    <footer className="App-footer text-center"> Coded by <a href="https://github.com/bananakodira" target="_blank" rel="noreferrer" >Ana Banana </a> and is open sourced on <a href="https://github.com/bananakodira/dictionary-project" target="_blank" rel="noreferrer">  Github. </a> 
    </footer>
    </div>
    </div>
  );
}

export default App;
