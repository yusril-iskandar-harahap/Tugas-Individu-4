import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Registration from './components/Registration'



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Registration' element={<Registration/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
