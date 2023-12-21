import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UserImg from "../../assets/img/user.svg";
import Button from "../../components/Buttons/Button";
import SocialTab from "../../components/SocialTab";
import TwitterIcon from "../../assets/img/socials/twitter_b.png";
import LinkedinIcon from "../../assets/img/socials/linkedin_b.png";
import FacebookIcon from "../../assets/img/socials/facebook_b.png";
import YoutubeIcon from "../../assets/img/socials/youtube_b.png";
import ArtstationIcon from "../../assets/img/socials/artstation_b.png";
import DiscordIcon from "../../assets/img/socials/discord_b.png";
import TelegramIcon from "../../assets/img/socials/telegram_b.png";
import ReeditIcon from "../../assets/img/socials/redit_b.png";
import GoogleIcon from "../../assets/img/socials/google_b.png";
import InstagramIcon from "../../assets/img/socials/instagram_b.png";
import TiktokIcon from "../../assets/img/socials/tiktok_b.png";
import UserHoverIcon from "../../assets/img/user_hover.svg";
import InputText from "../../components/InputText";

function Profile() {
  const [viewTypeProfile, setViewTypeProfile] = useState("general");
  const [typeModal, setTypeModal] = useState("");
  const [linkedSocial, setLinkedSocial] = useState("");

  const handleLink = () => {
    // Additional functionality to handle actual linking can be added here
    console.log(typeModal);
    setLinkedSocial(typeModal);
    setTypeModal(false);
  };

  const handleClose = () => {
    setLinkedSocial(false);
  };
  return (
    <>
      <Navbar />
      <div className="max-w-[1520px] mx-auto py-[85px] px-[30px]">
        <div className="flex items-center gap-8">
          <div className="relative cursor-pointer">
            <img src={UserImg} alt="user" width={"100px"} />
            <div className="absolute left-0 top-0 rounded-full border-4 border-[#FFA801] opacity-0 hover:opacity-100">
              <div className="bg-black rounded-full w-[92px] h-[92px] opacity-30"></div>
              <img
                src={UserHoverIcon}
                alt="user_hover"
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="font-bold text-black text-left text-[54px]">
            Mellosa
          </div>
        </div>
        <div className="flex mt-16">
          <div className="flex flex-col py-4 px-4 gap-4 border-r border-[#6164854D] min-w-[330px]">
            {viewTypeProfile === "general" ? (
              <Button
                text={"general info"}
                className={"-me-7"}
                onClick={() => setViewTypeProfile("general")}
              />
            ) : (
              <div
                className="ps-[30px] text-left uppercase text-[#616485] font-bold text-[20px] cursor-pointer"
                onClick={() => setViewTypeProfile("general")}
              >
                General Info
              </div>
            )}
            {viewTypeProfile === "socials" ? (
              <Button
                text={"connected socials"}
                className={"-me-7"}
                onClick={() => setViewTypeProfile("socials")}
              />
            ) : (
              <div
                className="ps-[30px] text-left uppercase text-[#616485] font-bold text-[20px] cursor-pointer"
                onClick={() => setViewTypeProfile("socials")}
              >
                Connected Socials
              </div>
            )}
          </div>
          <div className="py-4 px-[50px] w-full">
            {/*  Personal Component here */}
            {viewTypeProfile === "general" && (
              <div>
                <div className="font-bold text-black uppercase text-[32px] text-left">
                  Personal Info
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col items-start">
                    <label className="text-[14px] opacity-50 text-[#616485]">
                      Username
                    </label>
                    <InputText
                      type="text"
                      name="username"
                      placeholder="Mellosa"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label className="text-[14px] opacity-50 text-[#616485]">
                      Email
                    </label>
                    <InputText
                      type="text"
                      name="email"
                      placeholder="raviotar@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label className="text-[14px] opacity-50 text-[#616485]">
                      First Name
                    </label>
                    <InputText
                      type="text"
                      name="first_name"
                      placeholder="Olena"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label className="text-[14px] opacity-50 text-[#616485]">
                      Phone
                    </label>
                    <InputText type="text" name="phone" placeholder="+44" />
                  </div>
                  <div className="flex flex-col items-start">
                    <label className="text-[14px] opacity-50 text-[#616485]">
                      Last Name
                    </label>
                    <InputText
                      type="text"
                      name="last_name"
                      placeholder="Salska"
                    />
                  </div>
                </div>

                <div className="font-bold text-black uppercase text-[32px] text-left mt-8">
                  Security
                </div>
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[14px] opacity-50 text-[#616485]">
                    Change Password
                  </label>
                  <InputText
                    type="password"
                    name="password"
                    placeholder="********"
                  />
                </div>
                <div className="flex flex-col items-start w-1/2">
                  <label className="text-[14px] opacity-50 text-[#616485]">
                    Repeat Password
                  </label>
                  <InputText
                    type="password"
                    name="confirm_password"
                    placeholder="********"
                  />
                </div>
              </div>
            )}

            {/*  Link Socials Component here */}
            {viewTypeProfile === "socials" && (
              <div className="grid grid-cols-3 gap-4 w-full">
                <SocialTab
                  text={"Twitter"}
                  icon={TwitterIcon}
                  onOpenModal={() => setTypeModal("Twitter")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
                <SocialTab
                  text={"Instagram"}
                  icon={InstagramIcon}
                  onOpenModal={() => setTypeModal("Instagram")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
                <SocialTab
                  text={"Telegram"}
                  icon={TelegramIcon}
                  onOpenModal={() => setTypeModal("Telegram")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
                <SocialTab
                  text={"Artstation"}
                  icon={ArtstationIcon}
                  onOpenModal={() => setTypeModal("Artstation")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
                <SocialTab
                  text={"Tiktok"}
                  icon={TiktokIcon}
                  onOpenModal={() => setTypeModal("Tiktok")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
                <SocialTab
                  text={"Discord"}
                  icon={DiscordIcon}
                  onOpenModal={() => setTypeModal("Discord")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
                <SocialTab
                  text={"Facebook"}
                  icon={FacebookIcon}
                  onOpenModal={() => setTypeModal("Facebook")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
                <SocialTab
                  text={"Reedit"}
                  icon={ReeditIcon}
                  onOpenModal={() => setTypeModal("Reedit")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
                <SocialTab
                  text={"Google Account"}
                  icon={GoogleIcon}
                  onOpenModal={() => setTypeModal("Google Account")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
                <SocialTab
                  text={"Youtube"}
                  icon={YoutubeIcon}
                  onOpenModal={() => setTypeModal("Youtube")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
                <SocialTab
                  text={"Linkedin"}
                  icon={LinkedinIcon}
                  onOpenModal={() => setTypeModal("Linkedin")}
                  active={linkedSocial}
                  onClose={handleClose}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col py-4 gap-4 opacity-0 min-w-[300px]">
            <Button text={"connected socials"} className={"-me-7"} />
          </div>
          <div className="py-4 px-[50px]">
            <Button text={"save changes"} />
          </div>
        </div>
      </div>
      {typeModal && (
        <div
          className="w-screen h-screen fixed top-0 left-0 bg-opacity-70 bg-black z-20"
          onClick={() => setTypeModal("")}
        >
          <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 flex flex-col gap-8">
            <div className="w-[15.12px] h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-16" />
            <div className="font-bold text-black text-[54px] text-center">
              Link Your {typeModal}
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] opacity-50 text-[#616485]">
                {typeModal} Link
              </label>
              <InputText
                type="text"
                name="link"
                placeholder={`Paste here your ${typeModal}`}
              />
            </div>
            <Button text={"Link"} onClick={handleLink} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Profile;
