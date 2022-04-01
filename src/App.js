import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import ErrorPage from './components/ErrorPage/error.component';
import ShopPage from './pages/shop/shop.component.jsx';


const HatsPage = () => (
  <div>
    <Link to="/">Home</Link>
    <h2>HatsPage</h2>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/hats" element={<HatsPage /> } />
      <Route path="/shop" element={<ShopPage /> } />
      <Route path="*" element={<ErrorPage /> } />
      </Routes>
    </div>
  );
}

export default App;
