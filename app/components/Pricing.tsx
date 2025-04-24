import Image from "next/image";

import Check from "../../public/assets/check.svg";
import CheckWhite from "../../public/assets/check-white.svg";

const Pricing = () => {
  return (
    <div className="py-12">
      <h1 className="text-2xl text-center leading-9 font-medium text-[#172026] lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="text-[#36485C] pt-4 text-center lg:text-[18px]">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 pt-10 lg:flex-row lg:gap-x-6 lg:pt-16">
        <div className="w-full rounded-lg bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="text-[#4328EB] text-[18px] font-medium lg:text-xl">
              Free Trial
            </h3>
            <p className="text-[#36485C] pt-3 lg:text-[18px]">
              Perfect for testing the waters
            </p>

            <h2 className="text-2xl font-medium leading-9 text-[#172026] py-4 lg:text-[32px] lg:py-[32px]">
              $0<span className="text-[#5F7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-3 ">
              <li className="flex flex-row items-center gap-x-4 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex flex-row items-center gap-x-4 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Sed do eiusmod tempor incididunt
              </li>
              <li className="flex flex-row items-center gap-x-4 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Check" />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>
          <button className="w-full py-[14px] px-[30px] text-center bg-white font-medium text-[#4328EB] mt-4 rounded-[4px]">
            Start Trial
          </button>
        </div>
        <div className="w-full rounded-lg bg-[#4328EB] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="text-white text-[18px] font-medium lg:text-xl">
              Free Trial
            </h3>
            <p className="text-white pt-3 lg:text-[18px]">
              Perfect for testing the waters
            </p>

            <h2 className="text-2xl font-medium leading-9 text-white py-4 lg:leading-10 lg:text-[32px] lg:py-[32px]">
              $500<span className="text-white">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-3 ">
              <li className="flex flex-row items-center gap-x-4 text-white">
                <span>
                  <Image src={CheckWhite} alt="CheckWhite" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex flex-row items-center gap-x-4 text-white">
                <span>
                  <Image src={CheckWhite} alt="CheckWhite" />
                </span>
                Sed do eiusmod tempor incididunt
              </li>
              <li className="flex flex-row items-center gap-x-4 text-white">
                <span>
                  <Image src={CheckWhite} alt="CheckWhite" />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className="flex flex-row items-center gap-x-4 text-white">
                <span>
                  <Image src={CheckWhite} alt="CheckWhite" />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className="flex flex-row items-center gap-x-4 text-white">
                <span>
                  <Image src={CheckWhite} alt="CheckWhite" />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>
          <button className="w-full py-[14px] px-[30px] text-center bg-white font-medium text-[#4328EB] mt-4 rounded-[4px]">
            Get Started
          </button>
        </div>
        <div className="w-full rounded-lg bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="text-[#4328EB] text-[18px] font-medium lg:text-xl">
              Enterprise
            </h3>
            <p className="text-[#36485C] pt-3 lg:text-[18px]">
              Perfect for big companies
            </p>

            <h2 className="text-2xl font-medium leading-9 text-[#172026] py-4 lg:py-[32px] lg:text-[32px]">
              Custom
            </h2>

            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p>
              {" "}
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <button className="w-full py-[14px] px-[30px] text-center bg-white font-medium text-[#4328EB] mt-4 rounded-[4px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
