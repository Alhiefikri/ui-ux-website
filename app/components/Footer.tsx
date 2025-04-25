import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import X from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";

const Footer = () => {
  return (
    <div className="pt-20 pb-10">
      <div className="flex items-center gap-x-3">
        <Image src={Logo} alt="Logo" />
        <p className="text-[17px] font-bold text-[#36485C] uppercase tracking-widest">
          Alhie Fikri
        </p>
      </div>
      <ul className="mt-14 flex flex-col gap-y-[32px]  text-[#36485C]">
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>
      </ul>

      <p className="mt-14 text-center font-medium text-[#5F7896] leading-[22px]">
        © Copyright 2024. Your Site. All rights reserved.
      </p>

      <div className="flex gap-x-14 items-center justify-center mt-10">
        <Image src={X} alt="X" />
        <Image src={Facebook} alt="Facebook" />
        <Image src={Feed} alt="Feed" />
      </div>
    </div>
  );
};

export default Footer;
