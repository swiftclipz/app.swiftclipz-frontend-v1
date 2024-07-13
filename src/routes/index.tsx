import { Routes, Route } from "react-router-dom";

// scroll to top
import ScrollToTop from "./ScrollToTop";

// routes
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import ForgetPassword from "../pages/auth/ForgetPassword";

const RootRouter = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/reset-password" element={<ForgetPassword />} />
      </Routes>
    </ScrollToTop>
  );
};

export default RootRouter;
