import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Settings } from "./pages";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <main className="bg-slate-300/20">
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}