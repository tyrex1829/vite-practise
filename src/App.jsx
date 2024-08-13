import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-screen-2xl mx-auto h-screen bg-zinc-900">
      <NavBar />
    </div>
  );
}

export default App;
