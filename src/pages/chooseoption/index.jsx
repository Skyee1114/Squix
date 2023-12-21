import React from "react";
import Footer from "../../components/Footer";
import Tag from "../../components/Tag";
import Button from "../../components/Buttons/Button";
import NewsTagImg from "../../assets/img/news_tag.svg";
import OptionImg1 from "../../assets/img/option1.png";
import OptionImg2 from "../../assets/img/option2.png";
import OptionImg3 from "../../assets/img/option3.png";
import QuoteImg from "../../assets/img/quote.svg";
import { Link } from "react-router-dom";
import SelectLang from "../../components/SelectLang";
import ProfileButtons from "../../components/ProfileButtons";
import NavLogoSvg from "../../assets/img/logo_nav.svg";
import TwitterIcon from "../../assets/img/socials/twitter.png";
import TwitterHoverIcon from "../../assets/img/socials/twitter_.png";
import DiscordIcon from "../../assets/img/socials/discord.png";
import DiscordHoverIcon from "../../assets/img/socials/discord_.png";
import GoogleIcon from "../../assets/img/socials/google.png";
import GoogleHoverIcon from "../../assets/img/socials/google_.png";
import InstagramIcon from "../../assets/img/socials/instagram.png";
import InstagramHoverIcon from "../../assets/img/socials/instagram_.png";
import TiktokIcon from "../../assets/img/socials/tiktok.png";
import TiktokHoverIcon from "../../assets/img/socials/tiktok_.png";
import YoutubeIcon from "../../assets/img/socials/youtube.png";
import YoutubeHoverIcon from "../../assets/img/socials/youtube_.png";
import ImageSlider from "../../components/ImageSlider";
import TreeImg from "../../assets/img/tree.png";
import OptionRelatedImg from "../../assets/img/option_related.png";

function ChooseOption() {
  return (
    <>
      <div className='bg-[url("./assets/img/roles_back.png")]'>
        <div className="pt-6 max-w-[1520px] mx-auto">
          <div className="pb-24">
            <div className="relative z-20 flex justify-between items-center">
              <img src={NavLogoSvg} alt="logo" />
              <div className="flex gap-5">
                <Link
                  to={"/"}
                  className="font-bold text-[20px] text-white h-fit hover:text-[#FFA801]"
                >
                  PLAYTEST
                </Link>
                <Link
                  to={"/"}
                  className="font-bold text-[20px] text-white hover:text-[#FFA801] h-fit"
                >
                  ROADMAP
                </Link>
                <Link
                  to={"/"}
                  className="font-bold text-[20px] text-white hover:text-[#FFA801] h-fit"
                >
                  CAREERS
                </Link>
                <Link
                  to={"/"}
                  className="font-bold text-[20px] text-white hover:text-[#FFA801] h-fit"
                >
                  CONTACTS
                </Link>
                <SelectLang />
                <ProfileButtons />
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <div className="text-[32px] text-[#FFA801] text-left ms-8 font-bold mt-16">
                  &lt; BACK
                </div>
                <div className="w-[962px] flex flex-row gap-5">
                  <div className="min-w-[15px] bg-primary-gradient rounded">
                    {" "}
                  </div>
                  <div className="text-white font-bold text-[78px]  leading-[75px] text-left  relative ">
                    Choose your option to support our project
                  </div>
                </div>
                <div className="ms-8 flex gap-4 text-white mt-12">
                  <Tag size="big" text={"tagforthesection"} />
                  <Tag size="big" text={"tagforthesection"} />
                </div>
                <div className="text-[32px] text-white w-[1050px] text-left mt-16 ms-8">
                  The multi-award winning RPG Baldur’s Gate 3 released to the
                  mortal plane. Fill your mantelpiece with feelies while you
                  fill your heart with adventure. Gather your party and return
                  to the Forgotten Realms in a tale of fellowship and betrayal,
                  sacrifice and survival, and the lure of absolute power.
                </div>
              </div>
              <div className="flex flex-col justify-end">
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
        </div>
      </div>
      <div className="bg-[#F5F1ED]">
        <div className="max-w-[1520px] mx-auto flex gap-8">
          <div
            className="max-w-[1135px] min-w-[1135px] flex flex-col items-start gap-[50px] bg-white p-12"
            style={{ boxShadow: "0px 19px 35.3px 0px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="text-black text-[54px] font-bold uppercase">
              The best PC games for 2023
            </div>
            <div className="text-black text-[23px] text-left">
              <p>
                The multi-award winning RPG Baldur’s Gate 3 released to the
                mortal plane. Fill your mantelpiece with feelies while you fill
                your heart with adventure.
              </p>
              <br />
              <p>
                Gather your party and return to the Forgotten Realms in a tale
                of fellowship and betrayal, sacrifice and survival, and the lure
                of absolute power.
              </p>
              <br />
              <p>
                Mysterious abilities are awakening inside you, drawn from a mind
                flayer parasite planted in your brain. Resist, and turn darkness
                against itself. Or embrace corruption, and become ultimate evil.
                Choose from 12 classes and 11 races from the D&D Player's
                Handbook and create your own identity, or play as an Origin hero
                with a hand-crafted background. Or tangle with your inner
                corruption as the Dark Urge, a fully customisable Origin hero
                with its own unique mechanics and story. Whoever you choose to
                be, adventure, loot, battle and romance your way across the
                Forgotten Realms and beyond. Gather your party. Take the
                adventure online as a party of up to four.
              </p>
              <p>
                Every platform includes the Digital Deluxe content listed below.
              </p>
              <br />
              <p>
                The multi-award winning RPG Baldur’s Gate 3 released to the
                mortal plane. Fill your mantelpiece with feelies while you fill
                your heart with adventure. Gather your party and return to the
                Forgotten Realms in a tale of fellowship and betrayal, sacrifice
                and survival, and the lure of absolute power.
              </p>
            </div>
            <img src={OptionImg1} alt="option1" className="w-full" />
            <div className="text-black text-[23px] text-left">
              <p>
                The multi-award winning RPG Baldur’s Gate 3 released to the
                mortal plane. Fill your mantelpiece with feelies while you fill
                your heart with adventure. Gather your party and return to the
                Forgotten Realms in a tale of fellowship and betrayal, sacrifice
                and survival, and the lure of absolute power.
              </p>
            </div>
            <img src={OptionImg2} alt="option2" className="w-full" />
            <div className="text-black text-left font-bold text-[54px]">
              Basically — it’s all about he system, man
            </div>
            <div className="text-black text-left text-[23px]">
              <p>1. Is the team on the mainstream system’s payroll?</p>
              <p>2. Is the game or team owned by a platform holder?</p>
              <p>3. Do the artists have creative control?</p>
              <p>4. Is the team on the mainstream system’s payroll?</p>
              <p>5. Is the game or team owned by a platform holder?</p>
              <p>6. Do the artists have creative control?</p>
            </div>
            <div className="text-left text-black text-[23px]">
              The avatars weren’t just straight replicas of the current band
              members — Paul Stanley, Gene Simmons, Tommy Thayer and Eric Singer
              — but interpretations of them “as fantasy-based superheroes,” said{" "}
              <span className="text-[#FFA801] underline">
                Pophouse Entertainment
              </span>
              , which partnered with George Lucas’ Industrial Light & Magic for
              their creation. And, it says that’s just “one of the many and
              varied ways in which Kiss will live on as digital performers
              through their avatars in the future.” Industrial Light & Magic
              also created the digital avatars of ABBA (or ABBAtars) for the
              ongoing ABBA Voyage show in London.
            </div>
            <div className="text-left text-[#616485] text-[23px] p-16 pt-8 bg-[#F5F5F5]">
              <img src={QuoteImg} alt="quote" className="mb-1" />
              The avatars weren’t just straight replicas of the current band
              members — Paul Stanley, Gene Simmons, Tommy Thayer and Eric Singer
              — but interpretations of them “as fantasy-based superheroes,” said{" "}
              <span className="text-[#FFA801] underline">
                Pophouse Entertainment
              </span>
              , which partnered with George Lucas’ Industrial Light & Magic for
              their creation. And, it says that’s just “one of the many and
              varied ways in which Kiss will live on as digital performers
              through their avatars in the future.” Industrial Light & Magic
              also created the digital avatars of ABBA (or ABBAtars) for the
              ongoing ABBA Voyage show in London.
            </div>
            <div className="text-[36px] text-black font-bold">
              The multi-award winning RPG Baldur’s Gate 3
            </div>
            <div className="text-black text-left text-[23px]">
              <p>
                Gather your party and return to the Forgotten Realms in a tale
                of fellowship and betrayal, sacrifice and survival, and the lure
                of absolute power.
              </p>
              <br />
              <p>
                Mysterious abilities are awakening inside you, drawn from a mind
                flayer parasite planted in your brain. Resist, and turn darkness
                against itself. Or embrace corruption, and become ultimate
                evil.Choose from 12 classes and 11 races from the D&D Player's
                Handbook and create your own identity, or play as an Origin hero
                with a hand-crafted background. Or tangle with your inner
                corruption as the Dark Urge, a fully customisable Origin hero
                with its own unique mechanics and story. Whoever you choose to
                be, adventure, loot, battle and romance your way across the
                Forgotten Realms and beyond. Gather your party. Take the
                adventure online as a party of up to four.
              </p>
            </div>
            <table className="w-full">
              <thead>
                <th className="p-4 ]"></th>
                <th className="p-4 bg-[#F5F5F5]">Column</th>
                <th className="p-4 bg-[#F5F5F5]">Column</th>
                <th className="p-4 bg-[#F5F5F5]">Column</th>
              </thead>
              <tbody>
                {["1", "2", "3", "4"].map((item, index) => (
                  <tr>
                    <th className="p-4 bg-[#F5F5F5]">Row {item}</th>
                    <td className="p-4">Position 1</td>
                    <td className="p-4">Position 1</td>
                    <td className="p-4">Position 1</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-black text-left text-[23px]">
              <p>
                The multi-award winning RPG Baldur’s Gate 3 released to the
                mortal plane. Fill your mantelpiece with feelies while you fill
                your heart with adventure.
              </p>
              <br />
              <p>
                Gather your party and return to the Forgotten Realms in a tale
                of fellowship and betrayal, sacrifice and survival, and the lure
                of absolute power.
              </p>
              <br />
              <p>
                Mysterious abilities are awakening inside you, drawn from a mind
                flayer parasite planted in your brain. Resist, and turn darkness
                against itself. Or embrace corruption, and become ultimate evil.
                Choose from 12 classes and 11 races from the D&D Player's
                Handbook and create your own identity, or play as an Origin hero
                with a hand-crafted background. Or tangle with your inner
                corruption as the Dark Urge, a fully customisable Origin hero
                with its own unique mechanics and story. Whoever you choose to
                be, adventure, loot, battle and romance your way across the
                Forgotten Realms and beyond. Gather your party. Take the
                adventure online as a party of up to four.
              </p>
            </div>
            <table className="w-full">
              <thead>
                <th className="p-4 ]"></th>
                <th className="p-4 bg-[#F5F5F5]">Column</th>
                <th className="p-4 bg-[#F5F5F5]">Column</th>
                <th className="p-4 bg-[#F5F5F5]">Column</th>
              </thead>
              <tbody>
                {["1", "2", "3", "4"].map((item, index) => (
                  <tr>
                    <th className="p-4 bg-[#F5F5F5]">Row {item}</th>
                    <td className="p-4">Position 1</td>
                    <td className="p-4">Position 1</td>
                    <td className="p-4">Position 1</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex gap-4">
              <div className="text-black text-left text-[23px]">
                <p>
                  The multi-award winning RPG Baldur’s Gate 3 released to the
                  mortal plane. Fill your mantelpiece with feelies while you
                  fill your heart with adventure.
                </p>
                <br />
                <p>
                  Gather your party and return to the Forgotten Realms in a tale
                  of fellowship and betrayal, sacrifice and survival, and the
                  lure of absolute power.
                </p>
                <br />
                <p>
                  Mysterious abilities are awakening inside you, drawn from a
                  mind flayer parasite planted in your brain. Resist, and turn
                  darkness against itself. Or embrace corruption, and become
                  ultimate evil.
                </p>
                <p>
                  Choose from 12 classes and 11 races from the D&D Player's
                  Handbook and create your own identity, or play as an Origin
                  hero with a hand-crafted background. Or tangle with your inner
                  corruption as the Dark Urge, a fully customisable Origin hero
                  with its own unique mechanics and story. Whoever you choose to
                  be, adventure, loot, battle and romance your way across the
                  Forgotten Realms and beyond. Gather your party. Take the
                  adventure online as a party of up to four.
                </p>
              </div>
              <img src={OptionImg3} alt="" />
            </div>

            <ImageSlider
              title={"Title of the gallery if needed in two lines"}
              imgList={[
                { img: TreeImg, position: "bg-top" },
                { img: TreeImg, position: "bg-top" },
                { img: TreeImg, position: "bg-top" },
                { img: TreeImg, position: "bg-top" },
                { img: TreeImg, position: "bg-top" },
              ]}
              className={"w-full h-[548px]"}
            />
          </div>
          <div className="w-full pt-16">
            <div className="text-[24px] font-bold text-left mb-4">
              OTHER RELATED
            </div>
            <div className="flex flex-col gap-[52px]">
              <div className="relative">
                <img src={OptionRelatedImg} alt="" />
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

export default ChooseOption;
