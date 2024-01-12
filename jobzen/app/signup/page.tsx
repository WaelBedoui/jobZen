"use client"
import { FunctionComponent } from "react";
import { useState } from "react";
const Signup: FunctionComponent = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="relative bg-[#267296] w-full h-[1020px] overflow-hidden text-left text-11xl text-white font-jura">
      <section className="absolute top-[0px] left-[0px] bg-steelblue w-[1422px] h-[1020px]" />
      <div className="absolute top-[219px] left-[121px] w-[460px] h-[582px] overflow-hidden text-smi-8 text-black font-zen-kaku-gothic-antique">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
        <div className="absolute top-[23px] left-[40px] w-[204px] h-[83px] flex flex-col items-start justify-start">
          <div className="relative leading-[22.53px]">
            LET'S GET YOU STARTED
          </div>
          <div className="relative text-[25px] leading-[44px] font-medium">
            Create an Account
          </div>
        </div>
        <div className="absolute top-[131px] left-[40.5px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-200">
          <div className="relative w-[380px] h-[219px]">
            <div className="absolute h-[30.59%] w-full top-[0%] right-[0%] bottom-[69.41%] left-[0%]">
              <div className="absolute h-[85.07%] w-[100.26%] top-[15.67%] right-[-0.13%] bottom-[-0.75%] left-[-0.13%] rounded-lg box-border border-[1px] border-solid border-silver" />
              <div className="absolute w-[26.53%] top-[37.31%] left-[4.21%] leading-[28.16px] inline-block">
                malek aloui
              </div>
              <div className="absolute h-[34.33%] w-[20.99%] top-[0%] right-[76.07%] bottom-[65.67%] left-[2.94%] overflow-hidden text-center text-smi-8">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
                <div className="absolute top-[0%] left-[5.54px] leading-[22.53px] inline-block w-[68.69px]">
                  Your Name
                </div>
              </div>
            </div>
            <div className="absolute h-[30.59%] w-full top-[34.7%] right-[0%] bottom-[34.7%] left-[0%] text-darkslategray">
              <div className="absolute h-[85.07%] w-[100.26%] top-[15.67%] right-[-0.13%] bottom-[-0.75%] left-[-0.13%] rounded-lg box-border border-[1px] border-solid border-darkslategray" />
              <div className="absolute w-[45.79%] top-[37.31%] left-[4.21%] leading-[28.16px] inline-block">
                malekaloui@gamil.com
              </div>
              <div className="absolute h-[34.33%] w-[14.21%] top-[0%] right-[82.85%] bottom-[65.67%] left-[2.94%] overflow-hidden text-center text-smi-8">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
                <div className="absolute top-[0%] left-[5.55px] leading-[22.53px] inline-block w-11">
                  Email
                </div>
              </div>
            </div>
            <div className="absolute h-[30.59%] w-full top-[69.41%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-[85.07%] w-[100.26%] top-[15.67%] right-[-0.13%] bottom-[-0.75%] left-[-0.13%] rounded-lg box-border border-[1px] border-solid border-silver" />
              <img
                className="absolute h-[23.88%] w-[4.21%] top-[46.27%] right-[2.11%] bottom-[29.85%] left-[93.68%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/exiconeye@2x.png"
              />
              <div className="absolute w-[45.79%] top-[37.31%] left-[4.21%] leading-[28.16px] inline-block">
                ***************
              </div>
              <div className="absolute h-[34.33%] w-[17.63%] top-[0%] right-[79.43%] bottom-[65.67%] left-[2.94%] overflow-hidden text-center text-smi-8">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
                <div className="absolute top-[0%] left-[5.55px] leading-[22.53px] inline-block w-[58px]">
                  Password
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[380px] h-14 text-center text-[20px] text-white">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-steelblue" />
            <b className="absolute h-3/4 w-9/12 top-[12.5%] left-[12.5%] leading-[22.53px] flex items-center justify-center">
              SIGN IN
            </b>
          </div>
        </div>
        <div className="absolute h-[2.47%] w-[47.83%] top-[89.45%] left-[23.04%] text-gray-300 text-center inline-block">
          <span className="font-zen-kaku-gothic-antique">
            Already have an account?
          </span>
          <b>{` `}</b>
          <b>
            <span className="[text-decoration:underline]">LOGIN HERE</span>
          </b>
        </div>
      </div>
      <b className="absolute font-Jura text-2xl top-[51px] left-[98px] leading-[40%] inline-block w-[98px] h-[13px]">
        HOME
      </b>
      <b className="absolute font-Jura text-2xl top-[50px] left-[257px] leading-[40%] inline-block w-[163px] h-[11px]">
        ABOUT US
      </b>
      <b className="absolute font-Jura text-2xl top-[53px] left-[482px] leading-[40%] inline-block w-[197px] h-[11px]">
        CONTACT
      </b>
      <img
  className="absolute top-0  right-0 bottom-0 rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xlw- w-[782px] h-[1020px] object-cover"
        alt=""
        src="/image-4@2x.png"
      />
    </div>
  );
};

export default Signup;