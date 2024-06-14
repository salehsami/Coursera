import React from "react";
import SideBar from "./SideBar";
import MainPart from "./MainPart";

const Chats = () => {
  return (
    <div className="w-screen flex bg-slate-800">
      <SideBar/>
      <MainPart/>
    </div>
  );
};

export default Chats;
