import React from "react";

function Logo() {
  return (
    <div className="flex justify-center items-center select-none font-serif">
      <div className="bg-blue w-10 h-10 flex items-center justify-center rounded-[50%]">
        <p className="font-extrabold text-2xl text-white select-none">V</p>
      </div>
      <p className="ml-2 mr-1 font-bold dark:text-white">Vojtěch</p>
      <p className="dark:text-white">Kylar</p>
    </div>
  );
}

export default Logo;
