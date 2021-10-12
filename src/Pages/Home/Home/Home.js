import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <Experts />
    </div>
  );
}
