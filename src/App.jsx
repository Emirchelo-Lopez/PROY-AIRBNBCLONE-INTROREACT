import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}
