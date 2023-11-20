import React from "react";
import Card from "./component/Card";
const Rooms = () => {
  return (
    <div>
      <div className="subWrapper">
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>
          "Away from the city, and around all things pretty"
        </h3>
        <p style={{ textAlign: "center" }}>
          Our Luxury tents are ready to Welcome you!
        </p>
        <p style={{ textAlign: "center", margin: "40px" }}>
          Home alone with nature
        </p>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          For the next few lazy days and cozy nights, you're sandwiched between
          Mussoorie's firendliest clouds and a terrain clad with thousand
          textures. There's space to jump,roll around, and take in many deep
          breaths. We'll work till our socks are wet,to make your stay as
          comfortable and charming as possible.
        </p>
      </div>
      <Card />
    </div>
  );
};

export default Rooms;
