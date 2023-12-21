import React from "react";
import Footer from "../../components/Footer";
import Tag from "../../components/Tag";
import NewsTagImg from "../../assets/img/news_tag.svg";
import Button from "../../components/Buttons/Button";
import PDFIcon from "../../assets/img/pdf_icon.svg";
import GoogleBlueIcon from "../../assets/img/socials/blue_google.png";
import GoogleBlueHoverIcon from "../../assets/img/socials/google_.png";
import { Link } from "react-router-dom";
import SelectLang from "../../components/SelectLang";
import ProfileButtons from "../../components/ProfileButtons";
import NavLogoSvg from "../../assets/img/logo_nav.png";
import GoogleIcon from "../../assets/img/socials/google.png";
import GoogleHoverIcon from "../../assets/img/socials/google_.png";
import ImageSlider from "../../components/ImageSlider";
import TreeImg from "../../assets/img/tree.png";

function Roles() {
  return (
    <>
      <div className='bg-[url("./assets/img/roles_back.png")] bg-cover'>
        <div className="pt-6 max-w-[1520px] mx-auto">
          <div className="pb-24">
            <div className="relative z-20 flex items-center justify-between">
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
                <div className="text-[32px] text-[#FFA801] text-left ms-8 font-bold mt-16 uppercase">
                  &lt; Other roles
                </div>
                <div className="w-[962px] flex flex-row gap-5">
                  <div className="min-w-[15px] h-[120px] bg-primary-gradient rounded">
                    {" "}
                  </div>
                  <div className="text-white font-bold text-[78px]  leading-[75px] text-left  relative ">
                    Environment artist
                  </div>
                </div>
                <div className="text-[32px] text-white w-[1050px] text-left -mt-8 ms-8">
                  Are you passionate about creating captivating and immersive
                  environments for video games or digital media? We are
                  currently seeking a talented and creative Environment Artist
                  to join our team. If you have a keen eye for detail, strong
                  artistic skills, and a deep understanding of environmental
                  design, we want to hear from you!
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="flex flex-col items-center gap-[11px] relative bottom-0 h-fit">
                  <div className="text-sm font-bold text-white">Open on</div>
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
            <div className="text-black text-left text-[36px] font-bold">
              Responsibilities:
            </div>
            <div className="text-black text-left text-[23px]">
              <p>
                Responsibilities: As an Environment Artist, your
                responsibilities will include:
              </p>
              <br />
              <li>
                Collaborating with the art and design teams to conceptualize and
                create visually stunning and realistic environments.
              </li>
              <li>
                Developing and implementing textures, materials, and lighting to
                bring environments to life.
              </li>
              <li>
                Creating 3D models and assets for use in environmental design.
              </li>
              <li>
                Ensuring that all environmental elements align with the overall
                artistic vision and technical requirements of the project.
              </li>
            </div>

            <ImageSlider
              title={"Work examples"}
              imgList={[
                { img: TreeImg, position: "bg-top" },
                { img: TreeImg, position: "bg-top" },
                { img: TreeImg, position: "bg-top" },
                { img: TreeImg, position: "bg-top" },
                { img: TreeImg, position: "bg-top" },
              ]}
              className={"w-full h-[548px]"}
            />

            <div className="text-black text-left text-[36px] font-bold">
              Requirements:
            </div>
            <div className="text-black text-left text-[23px]">
              <p>
                The ideal candidate will possess the following qualifications:
              </p>
              <br />
              <li>
                Proven experience as an Environment Artist in the gaming or
                entertainment industry.
              </li>
              <li>
                Proficiency in industry-standard software such as Maya, 3ds Max,
                ZBrush, Substance Painter, and Unreal Engine.
              </li>
              <li>
                Strong understanding of composition, color theory, and lighting.
              </li>
              <li>Excellent communication and teamwork skills.</li>
            </div>

            <div className="text-black text-left text-[36px] font-bold">
              Benefits:
            </div>
            <div className="text-black text-left text-[23px]">
              <p>
                We offer a competitive salary, a dynamic and creative work
                environment, and the opportunity to contribute to exciting and
                innovative projects in the gaming industry.
              </p>
              <br />
              <p>
                If you are ready to bring your artistic vision to life and play
                a key role in shaping breathtaking virtual worlds, we encourage
                you to apply for the position of Environment Artist with us.
                Join our team and be part of an exhilarating journey in digital
                artistry!
              </p>
              <br />
              <p>
                To apply, please send your resume and portfolio showcasing your
                environment art to [Contact Email Address].
              </p>
              <br />
              <p>
                We look forward to welcoming a talented new member to our team!
              </p>
            </div>

            <div className="flex gap-[60px]">
              <Button icon={PDFIcon} text={"DOWNLOAD PDF STYLE PORTFOLIO"} />
              <div className="flex gap-1 items-center text-[#00A3FF] text-[20px]">
                <div className="relative">
                  <img src={GoogleBlueIcon} alt="" width={50} height={50} />
                  <img
                    src={GoogleBlueHoverIcon}
                    className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                View on Artstation
              </div>
            </div>
          </div>

          <div className="w-full pt-16">
            <div className="text-[24px] font-bold text-left mb-4">
              {" "}
              OTHER ROLES
            </div>
            <div className="flex flex-col gap-[52px]">
              <div className="flex flex-col gap-[35px] ps-2">
                <div className="flex flex-col items-start gap-2 relative pt-[30px] pb-[20px] px-[20px]">
                  <img
                    src={NewsTagImg}
                    alt=""
                    className="absolute top-0 left-0"
                  />
                  <div className="font-bold text-black text-[16px] uppercase">
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
                  <div className="font-bold text-black text-[16px] uppercase">
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
                  <div className="font-bold text-black text-[16px] uppercase">
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
                  <div className="font-bold text-black text-[16px] uppercase">
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
                  <div className="font-bold text-black text-[16px] uppercase">
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

export default Roles;
