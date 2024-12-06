import { Outlet } from "react-router-dom";
import Navebar from "./components/Navebar/navebar.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
  return (
    <>
      <Navebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
