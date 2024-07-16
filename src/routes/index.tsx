import { Routes, Route } from "react-router-dom";

// scroll to top
import ScrollToTop from "./ScrollToTop";

// routes
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import CodeVerification from "../pages/auth/CodeVerification";
import ForgetPassword from "../pages/auth/ForgetPassword";
import VerificationCodeSent from "../pages/auth/VerificationCodeSent";
import Swiftclipz from "../pages/swiftclipz/Swiftclipz";

const RootRouter = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/reset-password" element={<ForgetPassword />} />
        <Route path="/auth/code-sent" element={<VerificationCodeSent />} />
        <Route path="/auth/code-verification" element={<CodeVerification />} />
        <Route path="/swiftclipz" element={<Swiftclipz />} />
      </Routes>
    </ScrollToTop>
  );
};

export default RootRouter;
