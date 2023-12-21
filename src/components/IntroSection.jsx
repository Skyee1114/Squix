import React from "react";
import Button from "./Buttons/Button";
import { Link } from "react-router-dom";
import TwitterIcon from "../assets/img/socials/twitter.png";
import TwitterHoverIcon from "../assets/img/socials/twitter_.png";
import DiscordIcon from "../assets/img/socials/discord.png";
import DiscordHoverIcon from "../assets/img/socials/discord_.png";
import GoogleIcon from "../assets/img/socials/google.png";
import GoogleHoverIcon from "../assets/img/socials/google_.png";
import InstagramIcon from "../assets/img/socials/instagram.png";
import InstagramHoverIcon from "../assets/img/socials/instagram_.png";
import TiktokIcon from "../assets/img/socials/tiktok.png";
import TiktokHoverIcon from "../assets/img/socials/tiktok_.png";
import YoutubeIcon from "../assets/img/socials/youtube.png";
import YoutubeHoverIcon from "../assets/img/socials/youtube_.png";
import DonateIcon from "../assets/img/donate.svg";

export default function IntroSection() {
  return (
    <div>
      <div className="relative z-20 flex flex-row justify-between">
        <div>
          <div className="w-[780px] flex flex-row gap-5 ">
            <div className="min-w-[15px] bg-primary-gradient rounded"> </div>
            <div className="text-white font-bold text-[78px]  leading-[75px] text-left  relative ">
              We are proud to introduce Project III as our fantasy MMORPG
            </div>
          </div>
          <div className="flex flex-row p-10 gap-[86px]">
            <div>
              <Button icon={DonateIcon} text={"donate via stripe"} />
              <Link>
                <div className="pt-[35px] font-bold text-lg hover:text-[#FFA801] text-white">
                  OR SUBSCRIBE TO NEWSLETTER
                </div>
              </Link>
            </div>
            <div className=" flex flex-row gap-[17px] ">
              <div className="min-w-[15px] h-[75px] bg-primary-gradient rounded">
                {" "}
              </div>
              <div className="relative w-[470px] text-2xl text-left text-white ">
                Facilisis bibendum blandit adipiscing mi elit netus vulputate
                ultrices odio libero et. Congue maecenas adipiscing venenatis
                laoreet hac.<br></br> Facilisis bibendum blandit adipiscing mi
                elit netus vulputate ultrices odio libero et. Congue maecenas
                adipiscing venenatis laoreet hac.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-[11px] relative bottom-0 h-fit">
            <div className="text-sm font-bold text-white">Follow us</div>
            <div className="relative">
              <img src={TwitterIcon} alt="" width={50} height={50} />
              <img
                src={TwitterHoverIcon}
                className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="relative">
              <img src={DiscordIcon} alt="" width={50} height={50} />
              <img
                src={DiscordHoverIcon}
                className="absolute h-[52px] top-0 left-0 opacity-0 hover:opacity-100 transition duration-300"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="relative">
              <img src={InstagramIcon} alt="" width={50} height={50} />
              <img
                src={InstagramHoverIcon}
                className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="relative">
              <img src={TiktokIcon} alt="" width={50} height={50} />
              <img
                src={TiktokHoverIcon}
                className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="relative">
              <img src={GoogleIcon} alt="" width={50} height={50} />
              <img
                src={GoogleHoverIcon}
                className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="relative">
              <img src={YoutubeIcon} alt="" width={50} height={50} />
              <img
                src={YoutubeHoverIcon}
                className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
