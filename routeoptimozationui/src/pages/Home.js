import React from "react";

import Herosection from "../Components/Homepage/Herosec";
import Service from "../Components/Homepage/Servicesec";
import Howitworks from "../Components/Homepage/Howitworkssec";
import Features from "../Components/Homepage/featuresec";
import Contact from "../Components/Homepage/contactsec";

function Home() {
  return (
    <>
      <Herosection />
      <Service />
      <Howitworks />
      <Features />
      <Contact />
    </>
  );
}

export default Home;