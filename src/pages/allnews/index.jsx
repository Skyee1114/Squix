import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NewsImg from "../../assets/img/news_img.png";
import Button from "../../components/Buttons/Button";
import Tag from "../../components/Tag";
import TopPostImg from "../../assets/img/top_posts.png";
import NewsTagImg from "../../assets/img/news_tag.svg";

function AllNews() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F5F1ED] py-[119px]">
        <div className="max-w-[1520px] mx-auto flex justify-between gap-8">
          <div className="max-w-[1135px] min-w-[1135px] flex flex-col gap-[50px]">
            <div className="flex items-end gap-8">
              <div className="font-bold text-[54px] leading-[54px]">
                ALL NEWS
              </div>
              <div className="font-bold text-[20px] text-[#FFA801]">
                LATEST FIRST
              </div>
              <div className="font-bold text-[20px] text-[#FFA801] uppercase">
                <span className="text-black cursor-pointer">&lt;</span> December
                2023 <span className="text-black cursor-pointer">&gt;</span>
              </div>
            </div>
            <div className="flex items-center">
              <img src={NewsImg} alt="" />


              <div
                className="px-10 gap-[26px] flex flex-col bg-white rounded-[3px] pt-[32px] h-fit ms-[-40px]"
                style={{ boxShadow: "0px 0px 35.3px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <div className="pt-[8] flex flex-row justify-between">
                  <div className="flex flex-row gap-[17px]">
                    {["tagforthesection3-1", "tagfortehsection3-2"].map(
                      (tag, index) => (
                        <Tag size="big" text={tag} key={index} />
                      )
                    )}
                  </div>
                  <div className="flex items-center font-bold text-[15px] leading-4">
                    December 26, 2023
                  </div>
                </div>
                <div className="font-bold text-[47px] leading-[51px] text-left bg-white">
                  Some awesome news title in two lines to fill the space 4
                </div>
                <div className="text-2xl font-normal leading-6 text-left">
                  Facilisis bibendum blandit adipiscing mi elit netus vulputate
                  ultrices odio libero et. Congue maecenas adipiscing venenatis
                  laoreet hac. Facilisis bibendum blandit adipiscing mi elit
                  netus vulputate ultrices odio libero et. Congue maecenas
                  adipiscing venenatis laoreet hac.
                </div>
                <div className="flex flex-row items-center justify-between mb-12">
                  <Button text="VIEW MORE" />


                  <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                    <div className="text-sm font-bold">SHARE</div>
                    <div>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={NewsImg} alt="" />


              <div
                className="px-10 gap-[26px] flex flex-col bg-white rounded-b-[3px] pt-[32px] h-fit ms-[-40px]"
                style={{ boxShadow: "0px 0px 35.3px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <div className="pt-[8] flex flex-row justify-between">
                  <div className="flex flex-row gap-[17px]">
                    {["tagforthesection3-1", "tagfortehsection3-2"].map(
                      (tag, index) => (
                        <Tag size="big" text={tag} key={index} />
                      )
                    )}
                  </div>
                  <div className="flex items-center font-bold text-[15px] leading-4">
                    December 26, 2023
                  </div>
                </div>
                <div className="font-bold text-[47px] leading-[51px] text-left bg-white">
                  Some awesome news title in two lines to fill the space 4
                </div>
                <div className="text-2xl font-normal leading-6 text-left">
                  Facilisis bibendum blandit adipiscing mi elit netus vulputate
                  ultrices odio libero et. Congue maecenas adipiscing venenatis
                  laoreet hac. Facilisis bibendum blandit adipiscing mi elit
                  netus vulputate ultrices odio libero et. Congue maecenas
                  adipiscing venenatis laoreet hac.
                </div>
                <div className="flex flex-row items-center justify-between mb-12">
                  <Button text="VIEW MORE" />


                  <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                    <div className="text-sm font-bold">SHARE</div>
                    <div>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={NewsImg} alt="" />


              <div
                className="px-10 gap-[26px] flex flex-col bg-white rounded-b-[3px] pt-[32px] h-fit ms-[-40px]"
                style={{ boxShadow: "0px 0px 35.3px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <div className="pt-[8] flex flex-row justify-between">
                  <div className="flex flex-row gap-[17px]">
                    {["tagforthesection3-1", "tagfortehsection3-2"].map(
                      (tag, index) => (
                        <Tag size="big" text={tag} key={index} />
                      )
                    )}
                  </div>
                  <div className="flex items-center font-bold text-[15px] leading-4">
                    December 26, 2023
                  </div>
                </div>
                <div className="font-bold text-[47px] leading-[51px] text-left bg-white">
                  Some awesome news title in two lines to fill the space 4
                </div>
                <div className="text-2xl font-normal leading-6 text-left">
                  Facilisis bibendum blandit adipiscing mi elit netus vulputate
                  ultrices odio libero et. Congue maecenas adipiscing venenatis
                  laoreet hac. Facilisis bibendum blandit adipiscing mi elit
                  netus vulputate ultrices odio libero et. Congue maecenas
                  adipiscing venenatis laoreet hac.
                </div>
                <div className="flex flex-row items-center justify-between mb-12">
                  <Button text="VIEW MORE" />


                  <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                    <div className="text-sm font-bold">SHARE</div>
                    <div>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={NewsImg} alt="" />


              <div
                className="px-10 gap-[26px] flex flex-col bg-white rounded-b-[3px] pt-[32px] h-fit ms-[-40px]"
                style={{ boxShadow: "0px 0px 35.3px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <div className="pt-[8] flex flex-row justify-between">
                  <div className="flex flex-row gap-[17px]">
                    {["tagforthesection3-1", "tagfortehsection3-2"].map(
                      (tag, index) => (
                        <Tag size="big" text={tag} key={index} />
                      )
                    )}
                  </div>
                  <div className="flex items-center font-bold text-[15px] leading-4">
                    December 26, 2023
                  </div>
                </div>
                <div className="font-bold text-[47px] leading-[51px] text-left bg-white">
                  Some awesome news title in two lines to fill the space 4
                </div>
                <div className="text-2xl font-normal leading-6 text-left">
                  Facilisis bibendum blandit adipiscing mi elit netus vulputate
                  ultrices odio libero et. Congue maecenas adipiscing venenatis
                  laoreet hac. Facilisis bibendum blandit adipiscing mi elit
                  netus vulputate ultrices odio libero et. Congue maecenas
                  adipiscing venenatis laoreet hac.
                </div>
                <div className="flex flex-row items-center justify-between mb-12">
                  <Button text="VIEW MORE" />


                  <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                    <div className="text-sm font-bold">SHARE</div>
                    <div>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={NewsImg} alt="" />

              <div
                className="px-10 gap-[26px] flex flex-col bg-white rounded-b-[3px] pt-[32px] h-fit ms-[-40px]"
                style={{ boxShadow: "0px 0px 35.3px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <div className="pt-[8] flex flex-row justify-between">
                  <div className="flex flex-row gap-[17px]">
                    {["tagforthesection3-1", "tagfortehsection3-2"].map(
                      (tag, index) => (
                        <Tag size="big" text={tag} key={index} />
                      )
                    )}
                  </div>
                  <div className="flex items-center font-bold text-[15px] leading-4">
                    December 26, 2023
                  </div>
                </div>
                <div className="font-bold text-[47px] leading-[51px] text-left bg-white">
                  Some awesome news title in two lines to fill the space 4
                </div>
                <div className="text-2xl font-normal leading-6 text-left">
                  Facilisis bibendum blandit adipiscing mi elit netus vulputate
                  ultrices odio libero et. Congue maecenas adipiscing venenatis
                  laoreet hac. Facilisis bibendum blandit adipiscing mi elit
                  netus vulputate ultrices odio libero et. Congue maecenas
                  adipiscing venenatis laoreet hac.
                </div>
                <div className="flex flex-row items-center justify-between mb-12">
                  <Button text="VIEW MORE" />


                  <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                    <div className="text-sm font-bold">SHARE</div>
                    <div>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={NewsImg} alt="" />


              <div
                className="px-10 gap-[26px] flex flex-col bg-white rounded-b-[3px] pt-[32px] h-fit ms-[-40px]"
                style={{ boxShadow: "0px 0px 35.3px 0px rgba(0, 0, 0, 0.12)" }}
              >
                <div className="pt-[8] flex flex-row justify-between">
                  <div className="flex flex-row gap-[17px]">
                    {["tagforthesection3-1", "tagfortehsection3-2"].map(
                      (tag, index) => (
                        <Tag size="big" text={tag} key={index} />
                      )
                    )}
                  </div>
                  <div className="flex items-center font-bold text-[15px] leading-4">
                    December 26, 2023
                  </div>
                </div>
                <div className="font-bold text-[47px] leading-[51px] text-left bg-white">
                  Some awesome news title in two lines to fill the space 4
                </div>
                <div className="text-2xl font-normal leading-6 text-left">
                  Facilisis bibendum blandit adipiscing mi elit netus vulputate
                  ultrices odio libero et. Congue maecenas adipiscing venenatis
                  laoreet hac. Facilisis bibendum blandit adipiscing mi elit
                  netus vulputate ultrices odio libero et. Congue maecenas
                  adipiscing venenatis laoreet hac.
                </div>
                <div className="flex flex-row items-center justify-between mb-12">
                  <Button text="VIEW MORE" />


                  <div className="flex flex-row items-center h-fit gap-[10px] hover:text-[#FFA801] cursor-pointer">
                    <div className="text-sm font-bold">SHARE</div>
                    <div>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.1203 8.65301L16.5407 2.85889C16.3587 2.67012 16.0797 2.61086 15.8368 2.70863C15.5931 2.80733 15.4334 3.04341 15.4334 3.30605V6.09592H15.2188C10.6042 6.09592 6.84955 9.85053 6.84955 14.4652V15.7528C6.84955 16.0514 7.05985 16.3004 7.35078 16.3683C7.39809 16.3802 7.44524 16.3854 7.4924 16.3854C7.73539 16.3854 7.96801 16.2429 8.08039 16.0189C9.28734 13.6042 11.714 12.1046 14.4136 12.1046H15.4334V14.8943C15.4334 15.1571 15.5931 15.3932 15.8368 15.4909C16.0781 15.5896 16.3587 15.5296 16.5407 15.3407L22.1203 9.54655C22.3606 9.2968 22.3606 8.9037 22.1203 8.65301Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.7254 23.2636H4.27438C2.85462 23.2636 1.69922 22.1083 1.69922 20.6884V8.67108C1.69922 7.25132 2.85462 6.09592 4.27438 6.09592H6.84955C7.32422 6.09592 7.70788 6.47958 7.70788 6.95425C7.70788 7.42892 7.32422 7.81259 6.84955 7.81259H4.27438C3.8005 7.81259 3.41589 8.1972 3.41589 8.67108V20.6884C3.41589 21.1623 3.8005 21.5469 4.27438 21.5469H19.7254C20.1991 21.5469 20.5837 21.1623 20.5837 20.6884V13.8214C20.5837 13.3467 20.9674 12.9629 21.442 12.9629C21.9169 12.9629 22.3005 13.3467 22.3005 13.8214V20.6884C22.3005 22.1083 21.1451 23.2636 19.7254 23.2636Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="text-[24px] font-bold text-left mt-[20px] mb-[50px]">
              TOP POSTS
            </div>
            <div className="flex flex-col gap-[52px]">
              <div className="relative">
                <img src={TopPostImg} alt="" />
                <div className="text-white font-bold text-[32px] max-w-[270px] leading-[92%] text-left absolute bottom-[28px] left-[28px] flex flex-col gap-2 items-start">
                  Meet Project III and support us on Kickstarter
                  <Button text={"VIEW MORE"} />
                </div>
              </div>
              <div className="flex flex-col gap-[35px] ps-2">
                <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                  <img
                    src={NewsTagImg}
                    alt=""
                    className="absolute top-0 left-0"
                  />
                  <div className="font-bold text-black text-[16px]">
                    December 23, 2023
                  </div>
                  <div className="text-[16px] text-black text-left">
                    The Game Awards raises an old question:
                    <br /> What does indie mean?
                  </div>
                  <Tag size="big" text={"tagforthesection"} />
                </div>
                <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                  <img
                    src={NewsTagImg}
                    alt=""
                    className="absolute top-0 left-0"
                  />
                  <div className="font-bold text-black text-[16px]">
                    December 23, 2023
                  </div>
                  <div className="text-[16px] text-black text-left">
                    The Game Awards raises an old question:
                    <br /> What does indie mean?
                  </div>
                  <Tag size="big" text={"tagforthesection"} />
                </div>
                <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                  <img
                    src={NewsTagImg}
                    alt=""
                    className="absolute top-0 left-0"
                  />
                  <div className="font-bold text-black text-[16px]">
                    December 23, 2023
                  </div>
                  <div className="text-[16px] text-black text-left">
                    The Game Awards raises an old question:
                    <br /> What does indie mean?
                  </div>
                  <Tag size="big" text={"tagforthesection"} />
                </div>
                <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                  <img
                    src={NewsTagImg}
                    alt=""
                    className="absolute top-0 left-0"
                  />
                  <div className="font-bold text-black text-[16px]">
                    December 23, 2023
                  </div>
                  <div className="text-[16px] text-black text-left">
                    The Game Awards raises an old question:
                    <br /> What does indie mean?
                  </div>
                  <Tag size="big" text={"tagforthesection"} />
                </div>
                <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                  <img
                    src={NewsTagImg}
                    alt=""
                    className="absolute top-0 left-0"
                  />
                  <div className="font-bold text-black text-[16px]">
                    December 23, 2023
                  </div>
                  <div className="text-[16px] text-black text-left">
                    The Game Awards raises an old question:
                    <br /> What does indie mean?
                  </div>
                  <Tag size="big" text={"tagforthesection"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllNews;
