import Homepage from './pages/homepage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Questions from "./pages/questions";
import Results from './pages/results';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/questions" element={<Questions />} />
          <Route exact path='/results' element={<Results/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
