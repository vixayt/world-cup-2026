import { useState } from "react";
import Masthead from "./components/Masthead";
import Controls from "./components/Controls";
import ScatterPlot from "./components/ScatterPlot";
import MatchList from "./components/MatchList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Masthead />
      <Controls value={search} onChange={setSearch} />
      <ScatterPlot filter={search} />
      <MatchList filter={search} />
      <Footer />
    </>
  );
}

export default App;
