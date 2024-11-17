import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Services from "./Components/Servcies/Services.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Doctors from "./Components/Doctors/Doctors.jsx";
import Review from "./Components/Review/Review.jsx";
import Subscribe from "./Components/Subscribe/Subscribe.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Doctors />
      <Review />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
