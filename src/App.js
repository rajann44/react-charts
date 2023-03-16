import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/commoncomp/Navbar';
import Barchart from './components/funtionality/Barchart';

function App() {
  return (<>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<div className='container d-flex justify-content-center'><h1>Homepage</h1></div>} />
      <Route path="/chart" element={<Barchart></Barchart>} />
    </Routes>
    </>
  );
}

export default App;
