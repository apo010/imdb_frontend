import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Index";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import Series from "../../pages/Series";
import Celebs from "../../pages/Celebs";
import Discovery from "../../pages/Discovery";
import Signup from "../../pages/Signup";
import Signin from "../../pages/Signin";

function MenuRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/movies" element={<Layout><Movies /></Layout>} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/series" element={<Layout><Series /></Layout>} />
            <Route path="/celebs" element={<Layout><Celebs /></Layout>} />
            <Route path="/discovery" element={<Layout><Discovery /></Layout>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Layout><Home /></Layout>} />
        </Routes>
    );
}

export default MenuRoutes;