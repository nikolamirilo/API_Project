import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Content, Error } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Content pageType="players" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default App;
