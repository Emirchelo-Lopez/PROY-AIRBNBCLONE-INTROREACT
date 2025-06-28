import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}
