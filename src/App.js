import './App.css';
// pages
import { Main } from './pages/main/main';
import { Signin } from './pages/signin/signin';
import { Temp } from './pages/temp/temp';
// component
import { Header } from './components/header/header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Navigate to="/main" />} />
        <Route exact path='/main' element={<Main />} />
        <Route exact path='/sign-in' element={<Signin />} />
        <Route exact path='/temp' element={<Temp/>} />
      </Routes>
    </Router>
  );
}

export default App;