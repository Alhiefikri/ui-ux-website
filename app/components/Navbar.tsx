import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features", link: "#" },
  { name: "Pricing", link: "#" },
  { name: "Enterprise", link: "#" },
  { name: "Careers", link: "#" },
];

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between px-5 py-4 lg:container lg:mx-auto">
      <div className="flex">
        <Image src={Logo} alt="Logo" />

        <div className="hidden lg:flex items-center pl-[74px] gap-x-14">
          {navLinks.map((item, index) => (
            <p className="text-[#36485C] font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-row gap-x-5 items-center">
        <p className="hidden lg:block font-medium text-[#36485C] pr-14">
          Open a Account
        </p>
        <div className="flex items-center gap-x-3">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block ">
            Sign In
          </span>
        </div>

        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
