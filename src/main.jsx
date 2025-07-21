import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./reset.css";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
