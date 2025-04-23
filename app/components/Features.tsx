import Image from "next/image";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import BlueButton from "../../public/assets/blue-button.svg";
import GreenButton from "../../public/assets/green-button.svg";
import PinkButton from "../../public/assets/pink-button.svg";

const Features = () => {
  return (
    <div className="flex flex-col gap-y-[55px] py-[56px] lg:py-[120px] lg:gap-y-20">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse ">
        <Image
          src={Feature1}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="font-medium text-2xl pt-3 lg:text-[43px] lg:leading-[58px] leading-9">
            Simplify your sales monitoring
          </h1>
          <Image src={Feature1} alt="Feature 1" className="pt-6 sm:hidden" />
          <p className="text-base leading-6 text-[#36485C] py-6 lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex gap-x-4 items-center text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex gap-x-4 items-center text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex gap-x-4 items-center text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className="flex gap-x-3 pt-6 text-[#0085FF] font-medium lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={BlueButton} alt="Blue Button" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row ">
        <Image
          src={Feature2}
          alt="Feature 2 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px]">
            Customer Support
          </h3>
          <h1 className="font-medium text-2xl pt-3 lg:text-[43px] lg:leading-[58px]">
            Get in touch with your customers
          </h1>
          <Image src={Feature2} alt="Feature 2" className="pt-6 sm:hidden" />
          <p className="text-base leading-6 text-[#36485C] py-6 lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex gap-x-4 items-center text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex gap-x-4 items-center text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex gap-x-4 items-center text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className="flex gap-x-3 pt-6 text-[#00A424] font-medium lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={GreenButton} alt="Green Button" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse ">
        <Image
          src={Feature3}
          alt="Feature 3 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">
            Growth Monitoring
          </h3>
          <h1 className="font-medium text-2xl pt-3 lg:text-[43px] lg:leading-[58px] leading-9">
            Monitor your site’s new subscribers
          </h1>
          <Image src={Feature3} alt="Feature 3" className="pt-6 sm:hidden" />
          <p className="text-base leading-6 text-[#36485C] py-6 lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>

          <div className="flex w-full gap-x-6">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="font-medium text-xl text-[#172026] leading-[26px]">
                100+
              </h3>
              <p className="text-[#36485C]">Lorem ipsum dolor sit</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="font-medium text-xl text-[#172026] leading-[26px]">
                800+
              </h3>
              <p className="text-[#36485C]">Conse adipiscing elit</p>
            </div>
          </div>

          <p className="flex gap-x-3 pt-6 text-[#EB2891] font-medium lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={PinkButton} alt="Pink Button" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
