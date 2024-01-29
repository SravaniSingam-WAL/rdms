import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './home';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: '/rdms' });

function App() {
  return (
    <Router history={history} basename="/rdms">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
