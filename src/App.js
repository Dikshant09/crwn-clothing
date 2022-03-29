import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h2>HatsPage</h2>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/hats" element={<HatsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
