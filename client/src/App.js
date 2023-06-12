import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Topics } from './pages/Topics';
import { UserContextProvider } from './UserContext';
import { Tweet } from './pages/Tweet';
function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/topics' element={<Topics/>}/>
        <Route path='/topics/:id' element={<Tweet/>}/>
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
