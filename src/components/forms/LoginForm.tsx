import { Link } from "react-router-dom";
import InputLabel from "../ui/inputs/InputLabel";
import PasswordLabel from "../ui/inputs/PasswordLabel";
import ButtonOne from "../ui/buttons/ButtonOne";

const LoginForm = () => {
  return (
    <div className="w-full min-h-screen py-6">
      <div className="max-w-[550px] flex flex-col gap-12 m-auto my-4 px-8 py-11 rounded-[50px] bg-white sm:px-16">
        <div className="space-y-2">
          <h3 className="text-center text-2xl text-blueOne font-medium">
            Login to your Account
          </h3>
          <p className="text-xl text-[#808080] font-light text-center">
            Securely login to your Swiftclip
          </p>
        </div>
        <form className="space-y-6">
          <InputLabel
            label="Username or Email"
            id="username"
            name="username"
            placeholder="e.g YourmixJNR"
            type="text"
            required={true}
          />
          <PasswordLabel
            label="Password"
            id="password"
            name="password"
            placeholder="Your password"
            required={true}
          />
          <div className="pt-7">
            <ButtonOne text="Login In" type="submit" />
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center gap-4 pt-4">
        <span>
          <Link to="/auth/reset-password" className="text-[#237EEA]">
            Forgot Password?
          </Link>
        </span>
        <span className="text-black20">
          Don't Have an Account?{" "}
          <Link to="/" className="text-[#237EEA]">
            Sign Up Here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
