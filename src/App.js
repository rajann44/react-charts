import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/reusable/Navbar';
import Barchart from './components/funtionality/Barchart';
import Linechart from './components/funtionality/Linechart';
import Fileupload from './components/funtionality/FileUpload';
import CustomBarChart from './components/charts/CustomBarChart';

function App() {
  return (<>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<div className='container d-flex justify-content-center'><h1>Homepage</h1></div>} />
      <Route path="/chart" element={<Barchart></Barchart>} />
      <Route path="/line" element={<Linechart></Linechart>} />
      <Route path="/file" element={<Fileupload></Fileupload>} />
      <Route path="/bar2" element={<CustomBarChart></CustomBarChart>} />
    </Routes>
    </>
  );
}

export default App;
