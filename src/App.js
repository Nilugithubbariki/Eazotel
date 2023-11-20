import React from "react";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import AboutusPage from "./component/AboutusPage";
import Activies from "./component/Activies";
import AGlamper from "./component/AGlamper";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Gallery from "./component/Gallery";
import OurRooms from "./component/OurRooms";
import ParkCafe from "./component/ParkCafe";
import Footer from "./Footer";
import Rooms from "./Rooms";
import Topfooter from "./component/Topfooter";
const App = () => {
  return (
    <div>
      <Main />
      <Routes>
        <Route path="/" element={<Rooms />} />
        <Route path="/AboutusPage" element={<AboutusPage />} />
        <Route path="/Activies" element={<Activies />} />
        <Route path="/AGIamper" element={<AGlamper />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/OurRooms" element={<OurRooms />} />
        <Route path="/ParkCafe" element={<ParkCafe />} />
      </Routes>
      <Topfooter />
      <Footer />
    </div>
  );
};

export default App;
