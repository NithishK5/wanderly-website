import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Layout from "./components/Layout";
import FAQScreen from "./components/FAQScreen"; // Create this new file

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/faq" element={<FAQScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
