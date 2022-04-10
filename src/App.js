import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import ErrorPage from './components/ErrorPage/error.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

const HatsPage = () => (
  <div>
    <Link to="/">Home</Link>
    <h2>HatsPage</h2>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/hats" element={<HatsPage /> } />
      <Route path="/shop" element={<ShopPage /> } />
      <Route path="/signin" element={<SignInAndSignUp /> } />
      <Route path="*" element={<ErrorPage /> } />
      </Routes>
    </div>
  );
}

export default App;
