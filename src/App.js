import './App.css';
import Specifications from './Card/Specifications';
import Header from './HeaderSection/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className='AppBody'>
        Old Car Available
        <hr/>
      </div>
      <div className="CarSection">
        <Specifications/>
      </div>
    </div>
  );
}

export default App;
