import { useNavigate } from "react-router-dom";
import { RiNotification3Line } from "react-icons/ri";
import { PiBroadcastLight } from "react-icons/pi";
import { MdWindow } from "react-icons/md";

export default function Header() {
    const navigate = useNavigate();

    const handleNavigateToMovies = () => {
        navigate("/movies");
    };
    const handleNavigateToSeries = () => {
        navigate("/series")
    }
    const handleNavigateToCelebs = () => {
        navigate("/celebs")
    }

    return (
        <header className="w-auto h-28 pt-8 text-gray-500 bg-white flex items-center justify-between">
            <div className="flex pl-3">
                <button
                    onClick={handleNavigateToMovies}
                    className="px-3 font-semibold hover:text-black"
                >
                    Movies
                </button>
                <button
                    onClick={handleNavigateToSeries}
                    className="px-3 font-semibold hover:text-black"
                >
                    Series
                </button>
                <button
                    onClick={handleNavigateToCelebs}
                    className="px-3 font-semibold hover:text-black"
                >
                    Celebs
                </button>
            </div>
            <button className="text-3xl flex pr-1">
                <PiBroadcastLight className="hover:text-orange-500 pr-3" />
                <div className="relative">
                    <RiNotification3Line className="hover:text-orange-500 pr-3" />
                    <span className="absolute top-0.5 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border border-white">
                    </span>
                </div>
                <MdWindow className="hover:text-orange-500 pr-3" />
            </button>
        </header>
    );
}