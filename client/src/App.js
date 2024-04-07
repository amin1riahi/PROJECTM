import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './components/Menu';

function App() {

  return (
    <div className="App">
      <header className="App-header">
  
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
