import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

(() => {
  if ("hot" in import.meta) {
    // @ts-expect-error Reason: import.meta has hot
    if (import.meta.hot) {
      // @ts-expect-error Reason: import.meta has hot
      import.meta.hot.on("vite:beforeUpdate", () => {
        console.clear();
        location.reload();
      });
    }
  }
  const root = document.querySelector("#root");
  if (!(root instanceof HTMLDivElement)) {
    throw new Error("root is not a div");
  }
  createRoot(root).render(<App />);
})();
