import React, { useState } from "react";
import OtpInput from "react-otp-input";

const CodeVerificationForm = () => {
  const [otp, setOtp] = useState("");

  const handlePaste: React.ClipboardEventHandler = (event) => {
    const data = event.clipboardData.getData("text");
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen py-6">
      <div className="max-w-[550px] flex flex-col gap-12 m-auto my-4 px-8 py-11 rounded-[50px] bg-white sm:px-16">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          onPaste={handlePaste}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle="bg-black"
        />
      </div>
    </div>
  );
};

export default CodeVerificationForm;
