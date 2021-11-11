import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Error } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default App;
