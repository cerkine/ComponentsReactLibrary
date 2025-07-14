// src/routes/AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";


const AppRouter = () => (
    <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>
);

export default AppRouter;