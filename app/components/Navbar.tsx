import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between px-5 py-4 lg:container lg:mx-auto">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>

      <div className="flex flex-row gap-x-5">
        <div>
          <Image src={User} alt="User" />
        </div>
        <Image src={Menu} alt="Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
