import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Fragment>
              <Header />
              <Hero />
            </React.Fragment>
          }
        />
        <Route
          exact
          path="/channels"
          element={
            <React.Fragment>
              <Home />
            </React.Fragment>
          }
        />
        <Route
          exact
          path="/channels/:id"
          element={
            <React.Fragment>
              <Home />
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
