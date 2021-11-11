import React from "react";
import { Navbar, Footer } from "../components";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    loading,
    error,
    data = [],
  } = useFetch("https://free-nba.p.rapidapi.com/players", {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/players",
    headers: {
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
      "x-rapidapi-key": "5c16178ce3msh0929510bde0dfe8p103681jsn8bd102b87dd2",
    },
  });
  console.log(data);

  if (error) return "Error";
  if (loading) return "Loading";
  else {
    return (
      <div className="home">
        <Navbar />
        {data.map((item) => (
          <ol key={item.id}>
            Name: {item.first_name}
            Surname: {item.last_name}
            Position: {item.position}
          </ol>
        ))}
        <Footer />
      </div>
    );
  }
};

export default Home;
