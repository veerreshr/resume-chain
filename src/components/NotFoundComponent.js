import React from "react";
import notfoundimage from "../assets/not-found.gif";
const NotFoundComponent = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <img src={notfoundimage} alt="Not Found" style={{ margin: "2em" }} />
    </div>
  );
};

export default NotFoundComponent;
