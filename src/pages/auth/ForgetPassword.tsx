import SiteLogo from "../../components/logo/SiteLogo";
import ForgetPasswordForm from "../../components/forms/ForgetPasswordForm";

const ForgetPassword = () => {
  return (
    <div className="w-full bg-whiteF5">
      <div className="text-center pt-10 px-8 xl:px-24">
        <SiteLogo />
      </div>
      <ForgetPasswordForm />
    </div>
  );
};

export default ForgetPassword;
