import Home from "./Routes/Home";
import Detail from "./Routes/Detail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<Detail />}></Route>
        </Routes>
      </Router>
    );
  }
export default App;
