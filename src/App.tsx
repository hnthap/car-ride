import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

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