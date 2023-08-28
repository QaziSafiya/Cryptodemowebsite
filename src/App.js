import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Support from "./Support";
import Notifications from "./Notifications";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Support />
      <Notifications />
      <Footer />
    </div>
  );
}

export default App;
