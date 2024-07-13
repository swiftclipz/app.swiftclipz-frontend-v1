import { Routes, Route } from "react-router-dom";

// scroll to top
import ScrollToTop from "./ScrollToTop";

// routes
import SignUp from "../pages/auth/SignUp";

const RootRouter = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </ScrollToTop>
  );
};

export default RootRouter;
