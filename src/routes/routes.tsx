import  {FC, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"

const Routelink: FC = ()=>{
    return(
        <Suspense fallback={<div>Loading......</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              /* Route Product */
                /** Route Not Found */
                {/* <Route path="*" element={<NotFoundComponent />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    );
}

export default Routelink;