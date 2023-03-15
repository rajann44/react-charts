import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/commoncomp/Navbar';

function App() {
  return (<>
    <Navbar></Navbar>
    <Routes>
      <Route path="/chart1" element={<div></div>} />
    </Routes>
    </>
  );
}

export default App;
