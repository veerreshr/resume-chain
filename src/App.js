import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import About from "./screens/About";
import ResumeBuilder from "./screens/ResumeBuilder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResumeViewer from "./screens/ResumeViewer";
import NotFoundComponent from "./components/NotFoundComponent";
import Organisation from "./screens/Organisation";

function App() {
  return (
    <>
      <ToastContainer />
      <NavBarComponent />
      <Routes>
        <Route path="/build" element={<ResumeBuilder />} />
        <Route path="/" element={<About />} />
        <Route path="/organisation" element={<Organisation />} />
        <Route path="u/:id" element={<ResumeViewer />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <NotFoundComponent />
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
