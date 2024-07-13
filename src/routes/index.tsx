import { Routes, Route } from "react-router-dom";

// scroll to top
import ScrollToTop from "./ScrollToTop";

// routes
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";

const RootRouter = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/auth/login" element={<SignIn />} />
      </Routes>
    </ScrollToTop>
  );
};

export default RootRouter;
