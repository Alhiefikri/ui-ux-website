"use client";
import { Accordion } from "radix-ui";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];

const Faq = () => {
  return (
    <div className="flex flex-col w-full py-12 lg:py-[60px] lg:flex-row gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-sm font-medium leading-[22px] lg:text-base lg:leading-6">
          Frequently Asked Questions
        </h3>
        <h1 className="font-medium text-2xl py-4 leading-9 text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Let’s clarify some of your questions
        </h1>
        <p className="text-[#36485C] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className="pt-6 lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-4 rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="Plus"
                        className="h-10 w-10 lg:h-6 lg:w-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className="pt-2 text-[#36485C] text-[18px] leading-7">
                    {item.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default Faq;
