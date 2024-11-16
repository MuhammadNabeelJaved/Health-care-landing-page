import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Services from "./Components/Servcies/Services.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Doctors from "./Components/Doctors/Doctors.jsx";
import Review from "./Components/Review/Review.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Doctors />
      <Review/>
    </>
  );
}

export default App;
