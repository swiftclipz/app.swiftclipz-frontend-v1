import { Link } from "react-router-dom";
import InputLabel from "../ui/inputs/InputLabel";
import PasswordLabel from "../ui/inputs/PasswordLabel";
import ButtonOne from "../ui/buttons/ButtonOne";

const RegisterForm = () => {
  return (
    <div className="w-full min-h-screen py-6">
      <div className="max-w-[550px] flex flex-col gap-12 m-auto my-4 px-8 py-11 rounded-[50px] bg-white sm:px-16">
        <div className="space-y-2">
          <h3 className="text-center text-2xl text-blueOne font-medium">
            Create a Secure Swiftclipz Account
          </h3>
          <p className="text-xl text-[#808080] font-light text-center">
            Welcome to Swiftclipz, the effortless way to manage your online
            discoveries.
          </p>
        </div>
        <form className="space-y-6">
          <InputLabel
            label="Username"
            id="username"
            name="username"
            placeholder="e.g YourmixJNR"
            type="text"
            required={true}
          />
          <InputLabel
            label="Email"
            id="email"
            name="email"
            placeholder="e.g radmakson@gmail.com"
            type="email"
            required={true}
          />
          <PasswordLabel
            label="Password"
            id="password"
            name="password"
            placeholder="Your password"
            required={true}
          />
          <PasswordLabel
            label="Confirm Password"
            id="password"
            name="password"
            placeholder="Enter your password again"
            required={true}
          />
          <div className="pt-7">
            <ButtonOne text="Sign Up" type="submit" />
          </div>
        </form>
      </div>
      <div className="text-center text-black20">
        Have an account ?{" "}
        <Link to="/login" className="text-[#237EEA]">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
