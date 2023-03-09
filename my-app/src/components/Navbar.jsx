import React from "react";
import { AiOutlineHome, AiOutlineInbox } from "react-icons/ai";
import { BsBookmarkCheck, BsChatLeftText, BsFillBoxFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
export default function Navbar() {
  return (
    <div className="bg-primary_blue md:h-auto md:w-[5%] w-screen h-[100px] bottom-0 fixed md:static md:z-1 md:items-start">
      <div className="md:w-full bg-[#265cd9] md:flex md:justify-center md:items-center md:h-[120px] hidden hover:bg-[#2f65e3] transition ease-out cursor-pointer">
        <BsFillBoxFill size={45} className="text-white" />
      </div>
      <div className="h-full md:h-auto w-full flex justify-around md:flex-col items-center md:space-y-10 md:py-10">
        <AiOutlineHome
          size={28}
          className="text-white hover:opacity-70 cursor-pointer"
        />
        <AiOutlineInbox
          size={28}
          className="text-white hover:opacity-70 cursor-pointer"
        />
        <BsBookmarkCheck
          size={28}
          className="text-white hover:opacity-70 cursor-pointer"
        />
        <BsChatLeftText
          size={28}
          className="text-white hover:opacity-70 cursor-pointer"
        />
        <SlLocationPin
          size={28}
          className="text-white hover:opacity-70 cursor-pointer"
        />
      </div>
    </div>
  );
}
