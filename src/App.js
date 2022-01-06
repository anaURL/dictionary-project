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
    <div className="form-intro text-center"> What word do you want to look up?</div>
      <Dictionary word="solidarity"/>
    </main>
    <footer className="App-footer text-center"> Coded by Ana Banana
    </footer>
    </div>
    </div>
  );
}

export default App;
