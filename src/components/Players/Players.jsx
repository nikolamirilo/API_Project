import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import "./Players.scss";

const PlayersContainer = () => {
  // const { dataAPI = [] } = useFetch("https://free-nba.p.rapidapi.com/players", {
  //   method: "GET",
  //   url: "https://free-nba.p.rapidapi.com/players",
  //   headers: {
  //     "x-rapidapi-host": "free-nba.p.rapidapi.com",
  //     "x-rapidapi-key": "5c16178ce3msh0929510bde0dfe8p103681jsn8bd102b87dd2",
  //   },
  // });
  const { dataAPI = [] } = useFetch("http://data.nba.net/data/10s/prod/v1/2019/players.json");
  console.log(dataAPI);

  return (
    <div className="players">
      <h1>Active Players</h1>
      <div className="cards">
        {dataAPI.league &&
          dataAPI.league.standard.map((item) => {
            if (item.isActive === true) {
              return (
                <Card
                  title={`${item.firstName} ${item.lastName}`}
                  image={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${item.personId}.png`}
                  text={`Position: ${item.pos}`}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default PlayersContainer;
