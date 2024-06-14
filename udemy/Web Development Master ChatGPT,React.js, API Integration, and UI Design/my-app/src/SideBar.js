import React from "react";

const SideBar = () => {
  return (
    <div className="w-[20%] h-screen bg-black text-white p-4">
      <div className="p-1">
        <button className="w-full h-[50px] border rounded">+ New Chat</button>
      </div>
      <div className="p-1 h-[95%]">
        <div className="h-[85%] rounded p-3 overflow-scroll outline-none scrollbar-webkit">
          {[1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2].map((value, index) => {
            return (
              <div className="mt-3 mb-9 flex justify-center w-[100%] h-[7%] text-center p-1 font-light border cursor-pointer hover:bg-slate-900">
                <span className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-message-dots"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                    <path d="M12 11l0 .01" />
                    <path d="M8 11l0 .01" />
                    <path d="M16 11l0 .01" />
                  </svg>
                </span>
                <span className="pt-1">My Chat History</span>
              </div>
            );
          })}
        </div>
        <div className="h-[16%] rounded p-3 overflow-scroll outline-none scrollbar-webkit">
          {[1, 4, 3].map((value, index) => {
            return (
              <div className="mt-3 mb-9 flex justify-center w-[100%] h-[7%] text-center p-1 font-light border cursor-pointer hover:bg-slate-900">
                <span className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-message-dots"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                    <path d="M12 11l0 .01" />
                    <path d="M8 11l0 .01" />
                    <path d="M16 11l0 .01" />
                  </svg>
                </span>
                <span className="pt-1">My Chat History</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
