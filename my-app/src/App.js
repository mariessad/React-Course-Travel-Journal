import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Travel from "./components/Location";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Travel />
    </div>
  );
}

export default App;
