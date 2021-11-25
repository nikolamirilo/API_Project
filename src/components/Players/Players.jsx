import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import "./Players.scss";

const PlayersContainer = () => {
  const {
    data = [],
    loading,
    error,
  } = useFetch("http://data.nba.net/data/10s/prod/v1/2019/players.json");
  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="players">
      <h1>Active Players</h1>
      <div className="cards">
        {data.league &&
          data.league.standard.map((item) => {
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
