import React, { useEffect } from "react";
import Button from "./Buttons/Button";
import Tag from "./Tag";
import Arrow from "./Arrow";

export default function Gallery() {
  const [currentPosition, setCurrentPosition] = React.useState(1);
  const [progressStatus, setProgressStatus] = React.useState(0);

  const News_data = [
    {
      image_url: "img/News_item.png",
      tags: ["tagforthesection1-1", "tagfortehsection1-2"],
      date: "December 23, 2023",
      title: "Some awesome news title in two lines to fill the space 1",
      content:
        "Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.",
    },
    {
      image_url: "img/Elf_Female_mage.png",
      tags: ["tagforthesection2-1", "tagfortehsection2-2"],
      date: "December 24, 2023",
      title: "Some awesome news title in two lines to fill the space 2",
      content:
        "Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.",
    },
    {
      image_url: "img/News_item.png",
      tags: ["tagforthesection3-1", "tagfortehsection3-2"],
      date: "December 25, 2023",
      title: "Some awesome news title in two lines to fill the space 3",
      content:
        "Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.",
    },
    {
      image_url: "img/weathered-page 2.png",
      tags: ["tagforthesection4-1", "tagfortehsection4-2"],
      date: "December 26, 2023",
      title: "Some awesome news title in two lines to fill the space 4",
      content:
        "Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.",
    },
    {
      image_url: "img/Elf_Female_mage.png",
      tags: ["tagforthesection5-1", "tagfortehsection5-2"],
      date: "December 27, 2023",
      title: "Some awesome news title in two lines to fill the space 5",
      content:
        "Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing",
    },
    {
      image_url: "img/News_item.png",
      tags: ["tagforthesection6-1", "tagfortehsection6-2"],
      date: "December 28, 2023",
      title: "Some awesome news title in two lines to fill the space 6",
      content:
        "Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.",
    },
    {
      image_url: "img/weathered-page 2.png",
      tags: ["tagforthesection7-1", "tagfortehsection7-2"],
      date: "December 29, 2023",
      title: "Some awesome news title in two lines to fill the space 7",
      content:
        "Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.",
    },
    {
      image_url: "img/News_item.png",
      tags: ["tagforthesection8-1", "tagfortehsection8-2"],
      date: "December 30, 2023",
      title: "Some awesome news title in two lines to fill the space 8",
      content:
        "Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac. Facilisis bibendum blandit adipiscing mi elit netus vulputate ultrices odio libero et. Congue maecenas adipiscing venenatis laoreet hac.",
    },
  ];
  const [currentNews, setCurrentNews] = React.useState(News_data[0]);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(3);

  const handleLeftClick = () => {
    if (currentPosition > 1) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const handleRightClick = () => {
    if (currentPosition < News_data.length) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(1);
    }
  };

  useEffect(() => {
    if (currentPosition > News_data.length) {
      setCurrentPosition(1);
      return;
    }
    setCurrentNews(News_data[currentPosition - 1]);
    const interval = setInterval(() => {
      setProgressStatus((prevStatus) => {
        if (prevStatus < 100) {
          return prevStatus + 0.1;
        } else {
          clearInterval(interval);
          setCurrentPosition(currentPosition + 1);
          return prevStatus;
        }
      });
    }, 10);
    return () => clearInterval(interval);
  }, [currentPosition]);

  useEffect(() => {
    setProgressStatus(0); // Reset progressStatus to 0 when currentPosition changes
  }, [currentPosition]);

  useEffect(() => {
    if (currentPosition === 1) {
      setStart(0);
      setEnd(3);
    } else if (currentPosition > start && currentPosition >= end) {
      setStart(currentPosition - 3);
      setEnd(currentPosition);
    } else if (currentPosition <= start && currentPosition < end) {
      setStart(currentPosition - 1);
      setEnd(currentPosition + 2);
    }
  }, [currentPosition]);

  return (
    <div>
      <div className="bg-[#020911] flex flex-row  mt-[170px] justify-between pb-[100px]">
        <div className="relative z-20 ">
          <img
            src={currentNews.image_url}
            className="rounded-[3px] w-[750px] h-[750px]   object-cover"
            alt=""
          />
        </div>
        <div className="relative flex flex-col justify-between">
          <div>
            <div className="flex flex-row-reverse pb-[15px]">
              <div className="flex flex-row items-center w-[170px] justify-between ">
                <div className="flex bg-black rounded-[3px]">
                  <Arrow direction="left" onClick={handleLeftClick} />
                  <Arrow direction="right" onClick={handleRightClick} />
                </div>
                <div className="flex-auto text-3xl font-bold text-right text-white">
                  {currentPosition}/{News_data.length}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[18px]  z-20 relative">
              {News_data.slice(start, end).map((news, index) => (
                <div
                  className={`flex flex-col text-red-900 cursor-pointer`}
                  onClick={() => setCurrentPosition(index + start + 1)}
                  key={index}
                >
                  {index + start !== currentPosition - 1 ? (
                    <div className="h-[3px]"></div>
                  ) : (
                    <div
                      className={`bg-primary-gradient  h-[3px] rounded-[3px]`}
                      style={{ width: `${progressStatus}%` }}
                    >
                      {" "}
                    </div>
                  )}
                  <img
                    src={news.image_url}
                    alt=""
                    className="rounded-[3px] w-[224px] h-[122px]"
                    style={{
                      filter:
                        index + start !== currentPosition - 1
                          ? "grayscale(100%)"
                          : "none",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-[52px] w-[884px] z-20 absolute right-0 bg-[#F5F5F5] rounded-[3px]">
              <div
                className="bg-primary-gradient  h-[7px] rounded-[3px]"
                style={{ width: `${progressStatus}%` }}
              >
                {" "}
              </div>
              <div className="px-10 gap-[26px] flex flex-col bg-white rounded-[3px] pt-[32px]">
                <div className="pt-[8] flex flex-row justify-between">
                  <div className="flex flex-row gap-[17px]">
                    {currentNews.tags.map((tag, index) => (
                      <Tag size="big" text={tag} key={index} />
                    ))}
                  </div>
                  <div className="flex items-center font-bold text-[15px] leading-4">
                    {currentNews.date}
                  </div>
                </div>
                <div className="font-bold text-[47px] leading-[51px] text-left bg-white">
                  {currentNews.title}
                </div>
                <div className="text-2xl font-normal leading-6 text-left">
                  {currentNews.content}
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
          <div className="text-lg font-bold text-left hover:text-[#FFA801] cursor-pointer text-white">
            VIEW ALL NEWS >
          </div>
        </div>
      </div>
    </div>
  );
}
