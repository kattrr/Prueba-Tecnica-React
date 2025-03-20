import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Departamentos from "../pages/Departamentos";
import Layout from "../pages/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="Departamentos" element={<Departamentos />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
