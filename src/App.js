import './App.css';
import Card from './Card/Card';
import Form from './Form/Form';
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
        <Card/>
      </div>
      <div className='FormSection'>
        <Form/>
      </div>
    </div>
  );
}

export default App;
