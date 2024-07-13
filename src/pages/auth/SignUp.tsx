import SiteLogo from "../../components/logo/SiteLogo";
import RegisterForm from "../../components/forms/RegisterForm";

const SignUp = () => {
  return (
    <div className="w-full bg-whiteF5">
      <div className="text-center pt-20 px-8 xl:px-24">
        <SiteLogo />
      </div>
      <RegisterForm />
    </div>
  );
};

export default SignUp;
