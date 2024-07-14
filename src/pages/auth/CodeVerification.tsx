import SiteLogo from "../../components/logo/SiteLogo";
import CodeVerificationForm from "../../components/forms/CodeVerificationForm";

const CodeVerification = () => {
  return (
    <div className="w-full bg-whiteF5">
      <div className="text-center pt-10 px-8 xl:px-24">
        <SiteLogo />
      </div>
      <CodeVerificationForm />
    </div>
  );
};

export default CodeVerification;
