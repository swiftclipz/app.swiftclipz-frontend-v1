import { Link } from "react-router-dom";
import InputLabel from "../ui/inputs/InputLabel";
import ButtonOne from "../ui/buttons/ButtonOne";

const ForgetPasswordForm = () => {
  return (
    <div className="w-full min-h-screen py-6">
      <div className="max-w-[550px] flex flex-col gap-12 m-auto my-4 px-8 py-11 rounded-[50px] bg-white sm:px-16">
        <div className="space-y-2">
          <h3 className="text-center text-2xl text-blueOne font-medium">
            Let's Get You Back In
          </h3>
          <p className="text-xl text-[#808080] font-light text-center">
            Your Email, Let's Find Your Account
          </p>
        </div>
        <form className="space-y-6">
          <InputLabel
            label="Email Address"
            id="username"
            name="username"
            placeholder="e.g johndeo@gmial.com"
            type="text"
            required={true}
          />
          <div className="pt-7">
            <ButtonOne text="Submit" type="submit" />
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to="/auth/login" className="text-[#237EEA]">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
