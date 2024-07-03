import React from "react";

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
            <div className=" mx-auto mycontainer ">
                <h1 className="text-4xl font-bold text-center">
                    <span className="text-green-500"> &lt;</span>
                    Pass
                    <span className="text-green-500">OP/&gt;</span>
                </h1>
                <p className="text-green-900 text-lg text-center">Your own Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input placeholder="Enter website URL" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input placeholder="Enter Username" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
                        <div className="relative">
                        <input placeholder="Enter Password" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
                        <span className="absolute right-[3px] top-[4px] cursor-pointer">
                            <img className="p-1" width={26} src="icons/eye.png" alt="eye" />
                        </span>
                        </div>
                    </div>
                    <button className="flex justify-center items-center gap-2 bg-green-400 rounded-full px-8 py-2 w-fit hover:bg-green-300 border border-green-900">
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon>
                    Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager