import logo from './logo.svg';
import './App.css';
import Moment from 'react-moment';
import 'moment-timezone';

function App() {
  const dateToFormat = '1977-04-19T12:59-0500';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Moment>{dateToFormat}</Moment>
      </header>
    </div>
  );
}

export default App;
