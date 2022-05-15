import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Loing from "./pages/Loing";
import Services from "./pages/Services";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar>
        <Home />
        <About />
        <Services />
        <Contact />
        <Loing />
      </Navbar>
    </div>
  );
}

export default App;
