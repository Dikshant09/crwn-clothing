import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import ErrorPage from './components/ErrorPage/error.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HatsPage = () => (
  <div>
    <Link to="/">Home</Link>
    <h2>HatsPage</h2>
  </div>
);

const auth = getAuth();
class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null
  
  componentDidMount(){
    this.unsubscribeFromAuth = onAuthStateChanged(auth, user =>{
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header currentUser = { this.state.currentUser }/>
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
}

export default App;
