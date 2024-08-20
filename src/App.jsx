import { lazy, Suspense, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
const Hero = lazy(() => import("./components/Hero"));
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoodContext, moods } from "./components/Context";
import MoodEmoji from "./components/MoodEmoji";
import TodoList from "./components/TodoList";
const AdminPanel = lazy(() => import("./components/AdminPanel"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  const [count, setCount] = useState(0);

  console.log("I know you are looking for something, Lemme guess code? 😁");
  console.log("Go with this link - https://github.com/tyrex1829");

  return (
    <div className="bg-zinc-900">
      <div className="max-w-screen-2xl mx-auto h-screen bg-zinc-900">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Hero />
                  {/*context api used here */}
                  <MoodContext.Provider value={moods.happy}>
                    <MoodEmoji />
                  </MoodContext.Provider>
                </Suspense>
              }
            />
            <Route
              path="/admin-panel"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AdminPanel />
                  {/*context api used here */}
                  <MoodContext.Provider value={moods.sad}>
                    <MoodEmoji />
                  </MoodContext.Provider>
                </Suspense>
              }
            />
            <Route
              path="/todolist"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TodoList />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
