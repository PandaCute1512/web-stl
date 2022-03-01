import { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "../App"
import NotFoundComponent from "../components/notfound/notfound";
import Home from "../features/Home";
import Product from "../features/product";

const Routelink: FC = () => {
  return (
    <Suspense fallback={<div>Loading......</div>}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />}/>
              /* Route Product */
            <Route path="/product" element={<Product />}>

            </Route>
            /** */
            /** Route Not Found */
            <Route path="*" element={<NotFoundComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default Routelink;