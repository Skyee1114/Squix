import React, { useState, useEffect } from "react";
import SelectDivision from "./SelectDivision";
import SelectPosition from "./SelectPosition";
import Button from "./Buttons/Button";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import InputText from "./InputText";
import { StyledDropZone } from "react-drop-zone";
import "react-drop-zone/dist/styles.css";

import GoogleBlueIcon from "../assets/img/socials/blue_google.png";
import GoogleHoverIcon from "../assets/img/socials/google_.png";

const Careers = () => {
  const [state, setState] = useState({ file: undefined });
  const [label, setLabel] = useState(
    "Drop file here</br>*.pdf, *.jpg, *.png, *.pptx, 10mb max"
  );

  const setFile = (file, text) => {
    setState({ file });
  };

  // useEffect(() => {
  //   if (state.file) setLabel(state.file.name);
  //   else setLabel("Drop file here</br>*.pdf, *.jpg, *.png, *.pptx, 10mb max");
  // }, [state]);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      height: "90vh",
    },
    overlay: {
      backgroundColor: "#000000b0",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="bg-[#F5F1ED]">
      <div className="text-white h-[373px] bg-radial-gradient ">
        <img src="./img/careers_back.png" alt="" className="absolute right-0" />
        <div className="max-w-[1520px]  mx-auto my-auto h-full flex">
          <div className="flex flex-row items-center gap-[170px]">
            <div className="text-[97px] font-bold uppercase">Careers</div>
            <div className=" flex flex-row gap-[30px]">
              <div className="flex flex-col items-start gap-1">
                <span className="text-[20px]">Division</span>
                <SelectDivision />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-[20px]">Position</span>
                <SelectPosition />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1520px] mx-auto -mt-8">
        <div className="relative overflow-x-auto">
          <table className="w-full text-left">
            <tbody>
              {["1", "2", "3", "4", "5"].map((item, index) => {
                return (
                  <tr className="bg-white border-b-4 border-[#F5F1ED]">
                    <th
                      scope="row"
                      className="px-6 py-4 text-black font-bold uppercase text-[30px]"
                    >
                      environment artist
                    </th>
                    <td className="px-6 py-4 text-[25px] text-black">Remote</td>
                    <td className="px-6 py-4 text-[25px] text-black">
                      Full-Time
                    </td>
                    <td className="px-6 py-4 text-[25px] text-[#00A3FF] ">
                      <Link to={""} className="flex items-center gap-1">
                        <div className="relative">
                          <img
                            src={GoogleBlueIcon}
                            alt=""
                            width={50}
                            height={50}
                          />
                          <img
                            src={GoogleHoverIcon}
                            className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                            alt=""
                            width={50}
                            height={50}
                          />
                        </div>
                        View on Artstation
                      </Link>
                    </td>
                    <td>
                      <Button onClick={openModal} text="Apply"></Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <div className="w-[654px] p-20 gap-[70px] bg-white rounded-tl-[3px] rounded-bl-[3px]  flex-col  items-start inline-flex relative">
            <div className="text-black text-[54px] font-bold font-['Jost'] uppercase leading-none ">
              apply
            </div>
            <div className="w-[15.12px] h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-24" />
            <div className="flex-col justify-start items-start gap-[31px] flex w-full">
              <InputText
                name={"username"}
                placeholder={"Name*"}
                error={false}
                success={false}
                type={"text"}
              />
              <InputText
                name={"role"}
                placeholder={"role*"}
                error={false}
                type={"text"}
                success={false}
              />
              <InputText
                name={"email"}
                placeholder={"E-mail*"}
                error={false}
                success={false}
                type={"text"}
              />
              <InputText
                name={"portfolio"}
                placeholder={"Portfolio link*"}
                error={false}
                success={false}
                type={"text"}
              />
              <textarea
                className="bg-[#F5F5F5] text-[#606485] px-[33px] py-[11px] rounded-[1px] h-[182px] w-full resize-none outline-none border-none focus-within:outline-[#606485] focus-within:outline-1"
                name="coverletter"
              ></textarea>
              {/* <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                label="Drop file here</br>*.pdf, *.jpg, *.png, *.pptx, 10mb max"
                className="w-full"
                // dropMessageStyle={backgroundColor :'red'}
              /> */}
              <StyledDropZone
                className="w-full border-2"
                label={label}
                onDrop={(file, text) => console.log(file)}
              >
                Drop file here <br />
                *.pdf, *.jpg, *.png, *.pptx, 10mb max
              </StyledDropZone>
              <Button
                text={"Apply"}
                className={
                  "w-full text-center flex items-center justify-center"
                }
              />
            </div>
          </div>
        </Modal>
        <div className="flex flex-col items-center gap-6 pt-12 pb-32">
          <span className="text-black font-bold text-[40px] uppercase">
            Did Not find Suitable Role?
          </span>
          <Button text={"Send us your CV"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
