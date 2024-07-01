import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Demo from './components/Demo';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Validation from './components/Validation';
import User from './components/User';



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Demo />} />
        <Route path='/about' element={<About />} />
        <Route path='/user' element={<User />} />
      </Routes>
      <Validation />
    </>
  );
}

export default App;