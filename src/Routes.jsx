import {Routes as BrowserRoutes, Route} from "react-router-dom";
import Amador from "./pages/Amador";
import AmazonDublin from "./pages/AmazonDublin";
import Burlingame from "./pages/Burlingame";
import CSportsHay from "./pages/CSportsHay";
import Home from "./pages/Home";
// import Template from "./pages/Template";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/template" element={<Template />} /> */}
      <Route path="/amazon-dublin" element={<AmazonDublin />} />
      <Route path="/amador" element={<Amador />} />
      <Route path="/burlingame" element={<Burlingame />} />
      <Route path="/citysports-hayward" element={<CSportsHay />} />
      <Route path="/eastpodium" element={<Amador />} />
      <Route path="/foothill" element={<Burlingame />} />
    </BrowserRoutes>
  );
};

export default Routes;