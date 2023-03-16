import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/commoncomp/Navbar';
import Barchart from './components/funtionality/Barchart';
import Linechart from './components/funtionality/Linechart';

function App() {
  return (<>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<div className='container d-flex justify-content-center'><h1>Homepage</h1></div>} />
      <Route path="/chart" element={<Barchart></Barchart>} />
      <Route path="/line" element={<Linechart></Linechart>} />
    </Routes>
    </>
  );
}

export default App;
