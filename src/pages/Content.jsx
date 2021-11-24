import React from "react";
import { Layout, Players } from "../components";

const Content = (props) => {
  return (
    <div className="content">
      <Layout>{props.pageType === "players" ? <Players /> : <div></div>}</Layout>
    </div>
  );
};
export default Content;
