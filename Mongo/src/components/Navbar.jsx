import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-800 text-white">
      <div className="mycontainer flex flex-col md:flex-row justify-between items-center px-4 py-5 h-auto md:h-14">
        <div className="logo font-bold text-white text-2xl mb-4 md:mb-0">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        <button className="text-white bg-green-700 flex rounded-full justify-between items-center ring-1 ring-white">
          <img className="invert w-8 p-1" src="icons/github.svg" alt="github logo" />
          <span className="font-bold px-2">Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
