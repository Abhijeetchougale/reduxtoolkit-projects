import './App.css';
import FilterProduct from './Component/FilterProduct/FilterProduct';
import Main from './Component/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/filterProduct/:type' element={<FilterProduct />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
