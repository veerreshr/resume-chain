import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import About from "./screens/About";
import ResumeBuilder from "./screens/ResumeBuilder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResumeViewer from "./screens/ResumeViewer";

function App() {
  return (
    <>
      <ToastContainer />
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<ResumeBuilder />} />
        <Route path="about" element={<About />} />
        <Route path="u/:id" element={<ResumeViewer />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
