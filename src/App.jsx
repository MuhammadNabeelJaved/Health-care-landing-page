import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Services from "./Components/Servcies/Services.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
}

export default App;
