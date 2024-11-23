import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    email: "",
    otp: "",
    name: "",
    gender: "",
  });

  const fetchdata = async () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful otp is :", otp);
  };

  return (
    <div className="w-full min-h-screen fixed inset-0 bg-transparent">
      <div className="absolute inset-0 m-auto grid place-items-center">
        {step === 1 && (
          <div className="bg-background min-w-[28.125rem] h-auto p-6 gap-5 rounded-[1.25rem] flex flex-col justify-start items-stretch">
            <h1 className="text-2xl font-bold capitalize text-black">
              Hey Buddy! Let&apos;s <br />
              Signup/Login First
            </h1>
            <div className="flex flex-col gap-5 text-[1rem]">
              <input
                className="focus:outline-none placeholder:text-textColor text-textColor p-3 border border-solid border-[rgba(11,10,10,0.1) bg-body rounded-xl"
                placeholder="Your Name Please"
                name="name"
                onChange={handleChange}
                value={userData.name}
                type="text"
              />
              <input
                className="focus:outline-none placeholder:text-textColor text-textColor p-3 border border-solid border-[rgba(11,10,10,0.1) bg-body rounded-xl"
                placeholder="91+ Enter Mobile Number"
                name="email"
                onChange={handleChange}
                value={userData.email}
                type="text"
              />
              <select
                className="focus:outline-none p-3 border border-solid border-[rgba(11,10,10,0.1) bg-body rounded-xl text-textColor"
                value={userData.gender}
                name="gender"
                id="gender"
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button
              className="bg-primary text-background py-[0.88rem] rounded-lg text-[1rem] font-bold"
              onClick={() => setStep(2)}
            >
              Let&apos;s Go
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="bg-background min-w-[28.125rem] min-h-[18.3rem] p-6 gap-5 rounded-[1.25rem] flex flex-col justify-between items-stretch">
            <h1 className="text-2xl font-bold capitalize text-black">
              Hey We Sent You OTP
            </h1>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
            <button
              className="bg-primary text-background py-[0.88rem] rounded-lg text-[1rem] font-bold"
              onClick={fetchdata}
            >
              Login New
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

const OtpInput = ({ length, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-between">
      {otp.map((value, index) => {
        return (
          <input
            className="focus:outline-none w-[5rem] h-[3.3rem] bg-body rounded-xl border border-solid border-[rgba(11,10,10,0.1)] text-textColor text-center"
            key={index}
            type="text"
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        );
      })}
    </div>
  );
};
