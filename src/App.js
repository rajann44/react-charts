import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/reusable/Navbar";
import Barchart from "./components/funtionality/Barchart";
import Linechart from "./components/funtionality/Linechart";
import Fileupload from "./components/funtionality/FileUpload";
import CustomChart from "./components/charts/CustomChart";
import GridRender from "./components/analyzer/gridRender";
import Render from "./components/analyzer2/render";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container d-flex justify-content-center">
              <h1>Homepage</h1>
            </div>
          }
        />
        <Route path="/chart" element={<Barchart></Barchart>} />
        <Route path="/line" element={<Linechart></Linechart>} />
        <Route path="/file" element={<Fileupload></Fileupload>} />
        <Route path="/custom" element={<CustomChart></CustomChart>} />
        <Route path="/analyzer" element={<GridRender></GridRender>} />
        <Route path="/analyzer2" element={<Render></Render>} />
      </Routes>
    </>
  );
}

export default App;
