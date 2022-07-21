import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Travel from "./components/Location";
import data from "./components/data";

export default function App() {
  const TravelLoc = data.map((loc) => {
    return <Travel key={loc.id} loc={loc} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section>{TravelLoc}</section>
    </div>
  );
}
