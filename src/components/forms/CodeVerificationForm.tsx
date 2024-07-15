import React, { useState } from "react";
import OtpInput from "react-otp-input";

const CodeVerificationForm = () => {
  const [otp, setOtp] = useState("");

  const handlePaste: React.ClipboardEventHandler = (event) => {
    const data = event.clipboardData.getData("text");
    console.log(data);
  };

  return (
    <div className="w-full py-6">
      <div className="flex flex-col items-center justify-center gap-6 my-4 px-8 pb-4">
        <h2 className="text-3xl font-bold text-blueOne">Verification Code</h2>
        <p className="text-base text-black20 text-center">
          Enter the 4 digit code sent to your registered <br /> email to access
          Swiftclipz space
        </p>
        <div className="otp-div flex flex-col gap-4 items-center pt-2">
          <p className="text-lg font-semibold text-black20">
            Enter your 4-digit Verification code
          </p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            onPaste={handlePaste}
            renderSeparator={<span>---</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeVerificationForm;
