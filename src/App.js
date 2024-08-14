import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Nabar from "./Navbar/navbar";
import Slider from "./slider/slider";

function App() {  
  return (
    <div className="App">
      
      <Nabar />
      <BrowserRouter>
        <Routes>
          {/* <Route element={<Nabar />} /> */}
           {/* <Route path="/explore" element={<Slider />} /> */}
          {/* // <Route path="/travel" element={<Travel />} />
          // <Route path="/museums" element={<Museums />} />
          // <Route path="/visa" element={<Visa />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
