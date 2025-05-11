import { Link } from "react-router-dom";
import { BsCameraReels } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { PiCompassLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { PiAlarmLight } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { SlStar } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

export default function Sidebar() {
    return (
        <aside className="text-sm w-64 bg-white py-10 px-4 flex flex-col border-r rounded-s-3xl sticky top-0 h-screen">
            <div className="flex-row flex py-3 px-4">
                <BsCameraReels className="text-3xl relative" />
                <span className="text-3xl pl-3 font-bold">Movies</span>
            </div>
            <button className="py-6 px-3 text-gray-500">
                <div className="py-2 flex-row flex font-bold">
                    <span className="text-xl text-black">Menu</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <GoHome className="py-1 text-3xl" />
                    <Link to="/home" className="py-1 px-1">Home</Link>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <PiCompassLight className="py-1 text-3xl" />
                    <Link to="/discovery" className="py-1 px-1">Discovery</Link>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <GoPeople className="py-1 text-3xl" />
                    <span className="py-1 px-1">Community</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 pb-5 font-semibold border-b border-gray-400">
                    <PiAlarmLight className="py-1 text-3xl" />
                    <span className="py-1 px-1">Coming Soon</span>
                </div>
                <div className="py-2 flex-row flex font-bold pt-5">
                    <span className="text-xl text-black">Library</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <IoMdTime className="py-1 text-3xl" />
                    <span className="py-1 px-1 ">Recent</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <BsBookmark className="py-1 text-3xl" />
                    <span className="py-1 px-1">Bookmarked</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <SlStar className="py-1 text-3xl" />
                    <span className="py-1 px-1">Top Rated</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 pb-5 font-semibold border-b border-gray-400">
                    <BsDownload className="py-1 text-3xl" />
                    <span className="py-1 px-1">Downloaded</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 pt-5 font-semibold">
                    <IoSettingsOutline className="py-1 text-3xl" />
                    <span className="py-1 px-1">Settings</span>
                </div>
                <div className="py-2 flex hover:text-orange-500 font-semibold">
                    <IoMdLogOut className="py-1 text-3xl" />
                    <Link to="/signin" className="py-1 px-1">Log Out</Link>
                </div>
            </button>
        </aside>
    );
};