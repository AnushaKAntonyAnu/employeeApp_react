import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewallEmployee from './components/ViewallEmployee';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<AddEmployee/>}/>

      <Route path='/view' element={<ViewallEmployee/>}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
