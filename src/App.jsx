import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
