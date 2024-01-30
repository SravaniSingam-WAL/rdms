import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { getToken } from "./utils";
import Login from './login';
import Home from './home';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: '/rdms' });

function App() {
  const token=getToken()
    
  return (
    <Router history={history} basename="/rdms">
    <Routes>
    <Route path="/" element={token ? <Navigate to="/home" /> : <Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
