import React, { useState } from "react";
import company from "../assets/companylogo.svg";
import menu from "../assets/menu.svg";
import { sidebarItems } from "../utils/constants";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
     <img className=" p-4 md:hidden" src={menu} alt="" onClick={toggleSidebar} />
    <div className={` md:block w-60 bg-white p-4 hidden  ${isOpen ? 'lg:translate-x-0 translate-x-0' : 'lg:-translate-x-full translate-x-full'}`}>
      <div className="p-4">
       
        <img className="w-20 mx-auto" src={company} alt="" />
      </div>
      <div className=" ">
      {sidebarItems.map((item) => (
        <SidebarItem key={item.name} img={item.logo} title={item.name} />
      ))}
      </div>
      <div className="">
        {
          isOpen && sidebarItems.map((item) => (
            <SidebarItem key={item.name} img={item.logo} title={item.name} />
          ))
        }
      </div>
    </div>
    </>
  );
};

export default Sidebar;
