import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/form/Login';
import Register from './pages/form/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
