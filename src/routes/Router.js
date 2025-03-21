import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Departamentos from "../pages/Departamentos";
import Layout from "../pages/Layout";
import Presidentes from "../pages/Presidents";
import Turismo from "../pages/Touristic";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="Departamentos" element={<Departamentos />} />
          <Route path="Presidentes" element={<Presidentes />} />
          <Route path="Turismo" element={<Turismo />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
