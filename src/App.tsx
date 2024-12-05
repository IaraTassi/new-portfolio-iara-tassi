import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Course from "./components/Course/Course";
import "aos/dist/aos.css";
import AOS from "aos";
import "@fortawesome/fontawesome-free/css/all.min.css";

AOS.init({
  duration: 1000,
  once: true,
});

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Course />
    </div>
  );
}

export default App;
