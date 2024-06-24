import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

(async () => {
  // if ("hot" in import.meta) {
  //   // @ts-expect-error Reason: import.meta has hot
  //   if (import.meta.hot) {
  //     // @ts-expect-error Reason: import.meta has hot
  //     import.meta.hot.on("vite:beforeUpdate", () => {
  //       console.clear();
  //       // location.reload();
  //     });
  //   }
  // }
  createRoot(document.querySelector("#root")!).render(<App />);
})();
