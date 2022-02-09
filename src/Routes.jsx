import {Routes as BrowserRoutes, Route} from "react-router-dom";
import Amador from "./pages/Amador";
import AmazonDublin from "./pages/AmazonDublin";
import Burlingame from "./pages/Burlingame";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/amazon-dublin" element={<AmazonDublin />} />
      <Route path="/amador" element={<Amador />} />
      <Route path="/burlingame" element={<Burlingame />} />
    </BrowserRoutes>
  );
};

export default Routes;