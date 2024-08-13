import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-screen-2xl mx-auto h-screen bg-zinc-900">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
