import React from "react";
import { FaApple, FaAmazon } from "react-icons/fa";
import { SiHbo, SiNetflix } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";

export default function Rightbar() {
    return (
        <aside className="text-sm w-64 bg-white py-10 px-3 flex flex-col border-l rounded-e-3xl sticky top-0 h-screen">
            <div className="flex-row flex py-3 p-3">
                <TfiLayoutMediaLeftAlt className="relative top-1 text-3xl" />
                <span className="text-3xl pl-3 font-bold relative bottom-1">Media</span>
            </div>
            <button className=" px-3 text-gray-500 relative top-6">
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <FaApple className="py-1 text-3xl text-white bg-black rounded-md p-1 pl-1" />
                    <Link to="/apple-tv" className="py-1 px-3">Apple TV +</Link>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <SiHbo className="py-1 text-3xl text-white bg-black rounded-md p-1" />
                    <Link to="/hbo-max" className="py-1 px-3">HBO Max</Link>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold" >
                    <TbBrandDisney className="py-1 text-3xl text-white bg-teal-700 rounded-md p-1" />
                    <Link to="/disney-plus" className="py-1 px-3">Disney +</Link>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <SiNetflix className="py-1 text-3xl text-red-600 bg-black rounded-md p-1" />
                    <Link to="/netflix" className="py-1 px-3">Netflix</Link>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <FaAmazon className="py-1 text-3xl text-white bg-blue-500 rounded-md p-1" />
                    <Link to="/prime-video" className="py-1 px-3">Prime</Link>
                </div>
                <div className="border-b mt-2 border-gray-400"></div>
                <div className="py-2 flex font-bold">
                    <span className="text-xl text-black mt-2">Genre</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <span className="py-1  ">Action</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <span className="py-1 ">Comedy</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <span className="py-1 ">Drama</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <span className="py-1 ">Thriller</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <span className="py-1 ">Western</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <span className="py-1  ">Horror</span>
                </div>
            </button>
        </aside>
    );
}