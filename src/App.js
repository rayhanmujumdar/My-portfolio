import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Details from "./Pages/Details/Details";
import Projects from "./Pages/Home/Projects";
function App() {
  return (
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/project" element={<Projects></Projects>}></Route>
          <Route path="/project/:id" element={<Details></Details>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
  );
}

export default App;
