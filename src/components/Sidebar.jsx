import React from "react";
import company from "../assets/companylogo.svg";
import { sidebarItems } from "../utils/constants";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="w-60 bg-white p-4">
      <div className="p-4">
        <img className="w-20 mx-auto" src={company} alt="" />
      </div>
      {sidebarItems.map((item) => (
        <SidebarItem key={item.name} img={item.logo} title={item.name} />
      ))}
    </div>
  );
};

export default Sidebar;
