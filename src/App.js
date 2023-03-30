import {Routes, Route} from "react-router-dom"
import './App.css';
import Segment from "./pages/segment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Segment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
