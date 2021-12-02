import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Teams.scss";
import Card from "../Card/Card";

const Teams = () => {
  const { data = [] } = useFetch("https://free-nba.p.rapidapi.com/teams", {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/teams",
    params: { page: "0" },
    headers: {
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
      "x-rapidapi-key": "5c16178ce3msh0929510bde0dfe8p103681jsn8bd102b87dd2",
    },
  });
  console.log(data.data);
  return (
    <div className="teams">
      <div className="cards">
        {data.data &&
          data.data.map((team) => {
            return (
              <Card
                cardType="team"
                title={team.full_name}
                text={`Conference: ${team.conference}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Teams;
