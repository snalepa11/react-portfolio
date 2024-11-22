import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="body">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
