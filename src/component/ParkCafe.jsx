import React from "react";
import "./parkcafe.css";
import Cafe from "./Cafe";

const ParkCafe = () => {
  return (
    <div>
      <div className="parkcontainer">
        <div>
          Perched on a hill, at a picturesque height of 2,160 m, and guarded by
          300-year-old Deodar trees, our cafe is a mountain baby at heart.
        </div>
        <div>
          From a big barbecue menu defined by flavours of the woods, to simple
          joys hidden in sips of hot chocolate, a cozy day out in the sun is
          best enjoyed at Park Cafe.
        </div>
        <div>
          We are serving up a culinary experience packed in a picnic basket, and
          laid out in the midst of a historical forest, one formerly owned by
          Sir George Everest.
        </div>
        <div>
          After a hearty picnic, you can catch a quick snooze on the meadows,
          and find shapes in the clouds. We might join you too!
        </div>
      </div>
      <Cafe />
    </div>
  );
};

export default ParkCafe;
