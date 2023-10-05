import React from "react";
import Pokeball from "./Pokeball";
import Dice from "./Dice";

const LandingPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", height: "100vh" }}>
      <div style={{ position: "relative", flex: 1 }}>

        <Pokeball style={{ position: "absolute", top: 10, left: 0 }} />
        <Dice style={{ position: "absolute", bottom: 0, right: 0 }} />
      </div>
    </div>
  );
};

export default LandingPage;
