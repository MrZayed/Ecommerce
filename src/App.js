import Navbar from "./components/Navbar";
import AdditionalContentExample from "./components/AdditionalContentExample"
import Productslist from "./components/Productslist";
import { Routes, Route } from "react-router-dom";
import Productdet from "./Productdet";
import About from "./About";
import Footer from "./components/Footer";

function App(props) {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <br></br>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AdditionalContentExample />
              <Productslist />
            </>
          }
          />
        <Route path="/About" element={<About />} />
        <Route path="/product/:productId" element={<Productdet />} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
