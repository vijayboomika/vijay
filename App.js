// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Add from './Pages/Add/Add';
import Edit from './Pages/Edit/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <Menu/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<Add />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
