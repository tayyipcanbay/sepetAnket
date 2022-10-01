import Homepage from './pages/homepage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Questions from "./pages/questions";
import Results from './pages/results';

function App() {
  const questionList=[
    {
      id:1,
      question:"What is the capital of India?",
      answer:"New Delhi"
    },
    {
      id:2,
      question:"What is the capital of Australia?",
      answer:"Canberra"
    },
    {
      id:3,
      question:"What is the capital of USA?",
      answer:"Washington DC"
    }
  ]
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
