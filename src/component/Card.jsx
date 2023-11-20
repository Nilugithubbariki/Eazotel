import React from "react";
import "./Card.css";
const Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
      title: "The Camper",
      description:
        "Our coziest tent ensures a restful night's sleep after a day filled with adventures and exploration.Take in stunning views of the Deodar forest from your private balcony, and don't forget to personalize the experience by giving names to your favorite trees.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrrmGdL3fCXj4YwqtL70L9xo7a4poKnTK1ntg6lqqY80Cns1vjLdsr2mzUsfUcDTv7Jk&usqp=CAU",
      title: "The Glamper",
      description:
        "Immerse yourself in luxury amidst the wilderness at Everest Base Camp Mussoorie.Indulge in plush interiors and treat yourself to sweeping vistas of the Deodar forest from your private balcony as you sip on our delicious coffee.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9H8HI3LmG2ts-mCodpaNerfrG9RiYtqGKBHhm8ShDRl6qYw8SIGklRnHIFCvTiU2GSXk&usqp=CAU",
      title: "The Surveyor",
      description:
        "Experience the spirit of adventure in The Surveyor. This spacious and thoughtfully appointed tent offers a comfortable retreat after a day of exploration in the wilderness of Mussoorie. Recharge in its inviting ambiance and embrace the tranquil surroundings with all the amenities, with beautiful views of the Deodar forest.",
    },
    {
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "The Surveyor Suite",
      description:
        "Discover the epitome of luxury in The Surveyor Suite. Offering unrivaled opulence, this expansive tent is a sanctuary of refinement. Enjoy breathtaking forest views, unwind in the spacious living area, and indulge in the lavish amenities provided. Perfect for a family of 4, the Surveyor Suite is an abode to reckon with.",
    },
  ];
  return (
    <div className="cardStyle">
      {data.map((item) => {
        return (
          <div className="subCardStyle">
            <img
              src={item.image}
              style={{ width: "100%", height: "50%" }}
              alt=""
            />
            <h3 style={{ textAlign: "center" }}>{item.title}</h3>
            <p style={{ textAlign: "center", fontSize: "11px" }}>
              {item.description}
            </p>
            <div className="buttonStyle">
              <button className="btnStyle">Book Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
