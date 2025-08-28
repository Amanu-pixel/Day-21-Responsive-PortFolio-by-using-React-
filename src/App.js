import './index.css';
import Project from "./routes/Project";
import Home from './routes/Home' ;
import Contact from './routes/Contact';
import About from './routes/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Project' element={<Project/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>

    </Routes>
  );
}

export default App;
