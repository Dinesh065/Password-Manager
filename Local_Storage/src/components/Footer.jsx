import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-full py-4">
      <div className="logo font-bold text-white text-2xl mb-2">
        <span className="text-green-500"> &lt;</span>
        <span>Pass</span>
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <div>
        Created With CodeWithHarry
      </div>
    </div>
  );
};

export default Footer;
