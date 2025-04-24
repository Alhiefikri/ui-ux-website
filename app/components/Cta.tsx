import Image from "next/image";
import Arrow from "../../public/assets/arrow.png";

const Cta = () => {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-14 px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className="text-[32px] font-medium leading-10  text-white lg:text-[56px] lg:leading-[64px] ">
        Monitor your website like a pro
      </h1>
      <p className="mt-6 text-white lg:mt-12 text-[18px] leading-7">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div className="mt-10 lg:mt-14 flex flex-col w-full items-center lg:flex-row lg:justify-center lg:gap-x-10">
        <button className="py-4 px-[32px] rounded bg-white  text-[#EB2891] font-medium text-[18px] w-fit ">
          Try for free
        </button>
        <button className="font-medium text-white text-[18px] mt-[32px] flex w-full justify-center gap-x-3 lg:w-fit lg:mt-0 ">
          Contact Sales{" "}
          <span>
            <Image src={Arrow} alt="learn more" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cta;
