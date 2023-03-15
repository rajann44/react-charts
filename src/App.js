import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/commoncomp/Navbar';
import SampleChart from './components/populate/SampleChart';

function App() {
  return (<>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<div className='container d-flex justify-content-center'><h1>Homepage</h1></div>} />
      <Route path="/chart" element={<SampleChart></SampleChart>} />
    </Routes>
    </>
  );
}

export default App;
