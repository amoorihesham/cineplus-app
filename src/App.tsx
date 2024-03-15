import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./utils/app-router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
