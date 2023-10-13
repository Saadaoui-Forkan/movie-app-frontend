import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/form/Login';
import Register from './pages/form/Register';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
