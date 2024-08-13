import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import NotFound from "./components/NotFound";

function App() {
  const [count, setCount] = useState(0);
  console.log("I know you are looking for something, Lemme guess code? 😁");
  console.log("Go with this link - https://github.com/tyrex1829");

  return (
    <div className="bg-zinc-900">
      <div className="max-w-screen-2xl mx-auto h-screen bg-zinc-900">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
