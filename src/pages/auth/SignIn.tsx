import SiteLogo from "../../components/logo/SiteLogo";
import LoginForm from "../../components/forms/LoginForm";

const SignIn = () => {
  return (
    <div className="w-full bg-whiteF5">
      <div className="text-center pt-10 px-8 xl:px-24">
        <SiteLogo />
      </div>
      <LoginForm />
    </div>
  );
};

export default SignIn;
