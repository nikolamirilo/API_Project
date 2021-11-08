import React from "react";
import { Navbar, Footer } from "../components";

const Error = () => {
  return (
    <div className="error">
      <Navbar />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40vh",
          fontFamily: "Helvetica",
          color: "#000000",
          textAlign: "center",
          fontSize: "2.5rem",
        }}
      >
        Page Not Found
      </h1>
      <Footer />
    </div>
  );
};

export default Error;
