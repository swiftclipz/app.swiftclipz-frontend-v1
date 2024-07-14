import SiteLogo from "../../components/logo/SiteLogo";
import ButtonOne from "../../components/ui/buttons/ButtonOne";
import images from "../../constants/images";

const VerificationCodeSent = () => {
  return (
    <div className="w-full min-h-screen bg-whiteF5">
      <div className="pt-5 px-8 xl:px-24">
        <SiteLogo />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 m-auto my-4 px-8 pb-4">
        <img
          src={images.verificationImg.src}
          alt={images.verificationImg.alt}
          className="w-48 rounded-3xl"
        />
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-xl font-bold text-blueOne">
            Verification Code Sent
          </h2>

          <p className="text-base text-center">
            We have sent a Verification Code to <br />{" "}
            <span className="text-[#595959]">radmakson@gmail.com</span>
          </p>

          <ButtonOne text="I've received the code" type="button" />

          <span>Didn’t receive the email ?</span>
          <span className="text-blueOne font-light underline">
            Click to resend
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerificationCodeSent;
