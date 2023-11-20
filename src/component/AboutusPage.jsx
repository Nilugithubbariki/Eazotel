import React from "react";
import "./About.css";
const AboutusPage = () => {
  return (
    <div className="mainContainer">
      <div class="container">
        <div class="left">
          <p class="writeup">
            Immerse yourself in luxury amidst the wilderness at Everest Base
            Camp Mussoorie.Indulge in plush interiors and treat yourself to
            sweeping vistas of the Deodar forest from your private balcony as
            you sip on our delicious coffee.
          </p>
        </div>
        <div class="right">
          <div>
            <img
              class="rightimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrrmGdL3fCXj4YwqtL70L9xo7a4poKnTK1ntg6lqqY80Cns1vjLdsr2mzUsfUcDTv7Jk&usqp=CAU"
            />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="left">
          <p class="writeup">
            Experience the spirit of adventure in The Surveyor. This spacious
            and thoughtfully appointed tent offers a comfortable retreat after a
            day of exploration in the wilderness of Mussoorie. Recharge in its
            inviting ambiance and embrace the tranquil surroundings with all the
            amenities, with beautiful views of the Deodar forest.
          </p>
        </div>
        <div class="right">
          <div>
            <img
              class="rightimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9H8HI3LmG2ts-mCodpaNerfrG9RiYtqGKBHhm8ShDRl6qYw8SIGklRnHIFCvTiU2GSXk&usqp=CAU"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutusPage;
