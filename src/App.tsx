import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { About, Home, Settings } from "./pages";
import { AppConfig } from "./utils/config";

export default function App(props: { config: AppConfig }) {
  const { config } = props;
  return (
    <>
      <main className="bg-slate-300/20">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home config={config} />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}