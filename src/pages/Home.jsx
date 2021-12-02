import React from "react";
import { Layout } from "../components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Layout>
        <div
          className="buttons"
          style={{
            height: "75vh",
            width: "20vw",
            margin: "0 40vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "black",
            fontSize: "2rem",
          }}
        >
          <Link to="/players">Players</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/games">Games</Link>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
