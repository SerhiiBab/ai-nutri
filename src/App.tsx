import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </>
  );
}

export default App;
