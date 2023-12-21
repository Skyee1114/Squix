import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      width="22"
      height="13"
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector 5"
        d="M1.42773 1.28296L11.2139 11.0691L21 1.28296"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-[url('./assets/img/weathered-page.png')] bg-cover z-10 bg-[#eee7de] relative text-white">
      <div className="max-w-[1520px] mx-auto pt-[108px]">
        <div className="text-black font-bold text-8xl leading-[140px] pb-6">
          FAQ
        </div>
        <div className="flex flex-col gap-5 pb-[290px]">
          <Accordion

            className="flex flex-col accordion "

            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              className={`${open === 1 ? "bg-[#E7E3D8]" : "bg-[#F5F5F5] hover:bg-[#F8E7C7] rounded-[3px]"
                } text-3xl font-bold  leading-none text-black uppercase border-none   px-[62px] py-[57px] font-['Jost']`}
              onClick={() => handleOpen(1)}
            >
              What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="bg-[#E7E3D8] px-[62px] text-[#575757] text-3xl pt-0 pb-[57px] text-left leading-[normal] font-['Jost'] rounded-[3px]">
              'Project III' is still a very new project and we have soooo much
              left to do! We're still unsure of the final release date. However,
              we're planning to have a closed alpha-test with some members of
              the community as soon as possible - that'll be one of the first
              opportunities for members of the community to try the gameplay
              experience of 'Project III' for themselves!
            </AccordionBody>
          </Accordion>
          <Accordion
            className="flex flex-col accordion"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              className={`${open === 2 ? "bg-[#E7E3D8]" : "bg-[#F5F5F5] hover:bg-[#F8E7C7] rounded-[3px]"
                } text-3xl font-bold  leading-none text-black uppercase border-none   px-[62px] py-[57px] font-['Jost']`}
              onClick={() => handleOpen(2)}
            >
              How can I take part in the alpha test?
            </AccordionHeader>
            <AccordionBody className="bg-[#E7E3D8] px-[62px] text-[#575757] text-3xl pt-0 pb-[57px] text-left leading-[normal] font-['Jost'] rounded-[3px]">
              'Project III' is still a very new project and we have soooo much
              left to do! We're still unsure of the final release date. However,
              we're planning to have a closed alpha-test with some members of
              the community as soon as possible - that'll be one of the first
              opportunities for members of the community to try the gameplay
              experience of 'Project III' for themselves!
            </AccordionBody>
          </Accordion>
          <Accordion
            className="flex flex-col accordion"
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              className={`${open === 3 ? "bg-[#E7E3D8]" : "bg-[#F5F5F5] hover:bg-[#F8E7C7] rounded-[3px]"
                } text-3xl font-bold  leading-none text-black uppercase border-none   px-[62px] py-[57px] font-['Jost']`}
              onClick={() => handleOpen(3)}
            >
              What platforms will 'Project III' be available on?
            </AccordionHeader>
            <AccordionBody className="bg-[#E7E3D8] px-[62px] text-[#575757] text-3xl pt-0 pb-[57px] text-left leading-[normal] font-['Jost'] rounded-[3px]">
              'Project III' is still a very new project and we have soooo much
              left to do! We're still unsure of the final release date. However,
              we're planning to have a closed alpha-test with some members of
              the community as soon as possible - that'll be one of the first
              opportunities for members of the community to try the gameplay
              experience of 'Project III' for themselves!
            </AccordionBody>
          </Accordion>
          <Accordion
            className="flex flex-col accordion"
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              className={`${open === 4 ? "bg-[#E7E3D8] rounded-[3px]" : "bg-[#F5F5F5] hover:bg-[#F8E7C7] rounded-[3px]"
                } text-3xl font-bold  leading-none text-black uppercase border-none   px-[62px] py-[57px] font-['Jost']`}
              onClick={() => handleOpen(4)}
            >
              Will 'Project III' be free to play?
            </AccordionHeader>
            <AccordionBody className="bg-[#E7E3D8] px-[62px] text-[#575757] text-3xl pt-0 pb-[57px] text-left leading-[normal] font-['Jost']  rounded-[3px]">
              'Project III' is still a very new project and we have soooo much
              left to do! We're still unsure of the final release date. However,
              we're planning to have a closed alpha-test with some members of
              the community as soon as possible - that'll be one of the first
              opportunities for members of the community to try the gameplay
              experience of 'Project III' for themselves!
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
