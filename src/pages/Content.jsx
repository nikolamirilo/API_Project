import React from "react";
import { Layout, Players, Teams, Games } from "../components";

const Content = (props) => {
  return (
    <div className="content">
      <Layout>
        {props.pageType === "players" ? (
          <Players />
        ) : props.pageType === "teams" ? (
          <Teams />
        ) : (
          props.pageType === "games" && <Games />
        )}
      </Layout>
    </div>
  );
};
export default Content;
