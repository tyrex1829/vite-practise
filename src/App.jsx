import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-zinc-900">
      <div className="max-w-screen-2xl mx-auto h-screen bg-zinc-900">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/admin-panel" element={<AdminPanel />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
