import { useState } from "react";
import "./App.css";
import "./components/Dropdown.css";
import "./components/Carousel.css";
import { Searchbar } from "./components/Searchbar";
import ImageSlider from "./components/ImageSlider";
import Dropdown from "./components/Dropdown";

function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <>
      <div className="App">
        <Searchbar />
      </div>
      <div className="Carousel">
        <ImageSlider />
      </div>
      <div className="Dropdown">
        <Dropdown selected={selected} setSelected={setSelected} />
      </div>
    </>
  );
}

export default App;
