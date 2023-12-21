import React from "react";
import SelectLang from "./SelectLang";
import Button from "./Buttons/Button";
import { Link } from "react-router-dom";
import TwitterIcon from "../assets/img/socials/twitter.png";
import TwitterHoverIcon from "../assets/img/socials/twitter_.png";
import ReditIcon from "../assets/img/socials/redit.png";
import ReditHoverIcon from "../assets/img/socials/redit_.png";
import DiscordIcon from "../assets/img/socials/discord.png";
import DiscordHoverIcon from "../assets/img/socials/discord_.png";
import GoogleIcon from "../assets/img/socials/google.png";
import GoogleHoverIcon from "../assets/img/socials/google_.png";
import WhazAppIcon from "../assets/img/socials/whazapp.png";
import WhazAppHoverIcon from "../assets/img/socials/whazapp_.png";
import FacebookIcon from "../assets/img/socials/facebook.png";
import FacebookHoverIcon from "../assets/img/socials/facebook_.png";
import InstagramIcon from "../assets/img/socials/instagram.png";
import InstagramHoverIcon from "../assets/img/socials/instagram_.png";
import LinkedinIcon from "../assets/img/socials/linkedin.png";
import LinkedinHoverIcon from "../assets/img/socials/linkedin_.png";
import TelegramIcon from "../assets/img/socials/telegram.png";
import TelegramHoverIcon from "../assets/img/socials/telegram_.png";
import TiktokIcon from "../assets/img/socials/tiktok.png";
import TiktokHoverIcon from "../assets/img/socials/tiktok_.png";
import YoutubeIcon from "../assets/img/socials/youtube.png";
import YoutubeHoverIcon from "../assets/img/socials/youtube_.png";
import FootBrandImg from "../assets/img/footer_brand.png";
import LogoFooterImg from "../assets/img/logo_footer.png";

const Footer = () => {
  return (
    <div className="bg-[url('./assets/img/footer_back.png')] bg-cover bg-center bg-no-repeat overflow-hidden -mt-[1px]">
      <div className="flex justify-between w-full max-w-[1520px] mx-auto">
        <div className="flex flex-col items-start pt-8 me-24">
          <div className="w-[483px] text-[40px] font-bold text-white uppercase text-left leading-[50px]">
            Get in touch with us and watch the game goes live
          </div>
          <div className="flex flex-wrap gap-3 my-4 w-[483px]">
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
              <img src={ReditIcon} alt="" width={50} height={50} />
              <img
                src={ReditHoverIcon}
                className="absolute h-[52px] top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={55}
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
              <img src={YoutubeIcon} alt="" width={50} height={50} />
              <img
                src={YoutubeHoverIcon}
                className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="relative">
              <img src={FacebookIcon} alt="" width={50} height={50} />
              <img
                src={FacebookHoverIcon}
                className="absolute top-0 h-[52px] left-0 transition duration-300 opacity-0 hover:opacity-100"
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
              <img src={DiscordIcon} alt="" width={50} height={50} />
              <img
                src={DiscordHoverIcon}
                className="absolute h-[52px] top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="relative">
              <img src={WhazAppIcon} alt="" width={50} height={50} />
              <img
                src={WhazAppHoverIcon}
                className="absolute h-[52px] top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="relative">
              <img src={TelegramIcon} alt="" width={50} height={50} />
              <img
                src={TelegramHoverIcon}
                className="absolute h-[52px] top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="relative">
              <img src={LinkedinIcon} alt="" width={50} height={50} />
              <img
                src={LinkedinHoverIcon}
                className="absolute top-0 h-[52px] left-0 transition duration-300 opacity-0 hover:opacity-100"
                alt=""
                width={50}
                height={50}
              />
            </div>
          </div>
          <SelectLang />
          <img
            src={FootBrandImg}
            alt="footer_brand"
            className="w-[250px] mb-16 mt-8 pt-8"
          />
        </div>
        <div className="relative w-full">
          <div className="absolute top-0 left-0 z-10 w-full h-full pt-8 ps-16 ">
            <div className="flex justify-between">
              <div className="w-[483px] font-bold text-white uppercase text-left">
                <span className="text-[40px] leading-[50px]">subscribe
                  <br /> to newsteller</span>
                <input
                  type="email"
                  className="w-full h-[60px] mt-4 py-2 px-8 text-[20px] bg-[#1E2730] my-8"
                  placeholder="E-mail"
                />
                <Button text="Subscribe" className="mt-4" />
              </div>
              <div>
                <img src={LogoFooterImg} alt="" className="mb-8" />
                <div className="flex flex-col justify-end gap-3">
                  <Link
                    to="/dashboard"
                    className="text-white text-[18px] text-right font-bold uppercase hover:text-[#FFA801]"
                  >
                    Presskit
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-white text-[18px] text-right font-bold uppercase hover:text-[#FFA801]"
                  >
                    Careers
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-white text-[18px] text-right font-bold uppercase hover:text-[#FFA801]"
                  >
                    Donations
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-white text-[18px] text-right font-bold uppercase hover:text-[#FFA801]"
                  >
                    Kickstarter
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-white text-[18px] text-right font-bold uppercase hover:text-[#FFA801]"
                  >
                    Contacts
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-white text-[18px] text-right font-bold uppercase hover:text-[#FFA801]"
                  >
                    Fan content policy
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-white text-[18px] text-right font-bold uppercase hover:text-[#FFA801]"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-white text-[18px] text-right font-bold uppercase hover:text-[#FFA801]"
                  >
                    Cookies settings
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-[14px] text-[#ACACAC] mt-8 w-[516px] text-right ms-auto">
              Copyrights © Squix Studios. All rights reserved. All company
              names, brand names, trademarks and logos are the property of their
              respective owners.
            </div>
          </div>
          <div className="absolute bg-[#000000D6] top-0 left-0 h-full w-screen z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
