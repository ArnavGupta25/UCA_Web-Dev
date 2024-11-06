import { createRoot } from "react-dom/client";
import { App as CustomApp } from "./App"

const reactprojectroot = createRoot(document.getElementById("root"));
reactprojectroot.render(<CustomApp />);