import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Place from "./pages/Place";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/places" element={<Place />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
