import SiteLogo from "../../components/logo/SiteLogo";
import CodeVerificationForm from "../../components/forms/CodeVerificationForm";

const CodeVerification = () => {
  return (
    <div className="w-full min-h-screen bg-whiteF5">
      <div className="pt-5 px-8 xl:px-24">
        <SiteLogo />
      </div>
      <CodeVerificationForm />
    </div>
  );
};

export default CodeVerification;
