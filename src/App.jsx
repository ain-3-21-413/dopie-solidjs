import logo from './logo.svg';
import styles from './App.module.css';
import { Router } from '@solidjs/router';
import DopieApp from './DopieApp/DopieApp';

function App() {
  return (
    <Router>
      <DopieApp />
    </Router>
  );
}

export default App;
