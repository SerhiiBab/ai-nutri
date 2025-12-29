import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Start from "./pages/Start";
import Heute from "./pages/Heute";
import Bericht from "./pages/Bericht";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/heute" element={<Heute />} />
        <Route path="/bericht" element={<Bericht />} />
      </Routes>
    </>
  );
}

export default App;
