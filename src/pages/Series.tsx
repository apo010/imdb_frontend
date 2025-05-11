import React, { useState } from 'react';
import { FetchSeries, Serie } from '../components/Fetch/Index';
import { SlStar } from "react-icons/sl";
import { IoIosPlay } from "react-icons/io";

export default function Series() {
    const [series, setSeries] = useState<Serie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const seriesPerPage = 4;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const PlayTrailer = (tanitimUrl: string | undefined) => {
        if (tanitimUrl) {
            window.open(tanitimUrl, "_blank");
        } else {
            alert("Fragman bulunamadı!");
        }
    };

    const indexOfLastSerie = currentPage * seriesPerPage;
    const indexOfFirstSerie = indexOfLastSerie - seriesPerPage;
    const currentSeries = series.slice(indexOfFirstSerie, indexOfLastSerie);

    return (
        <div className="pl-2 bg-white w-[610px]">
            <FetchSeries onDataFetched={setSeries} />
            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">All Series</h2>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    {currentSeries.map((serie, index) => (
                        <div key={index} className="bg-teal-900 bg-opacity-30 rounded-xl w-72 h-96">
                            <div key={index} className="relative">
                                <img
                                    src={serie.image_url}
                                    className="rounded-xl w-5/6 h-36 mt-4 ms-6"
                                /><div className="relative left-[120px] flex text-black">
                                    <SlStar className="pe-2 text-2xl" />
                                    {serie.imdbPuani || "no movie"}
                                </div>
                                <div className="text-black text-center font-semibold border-b">
                                    {serie.adi || "No series"}
                                </div>
                                <div className="text-center m-2">
                                    {serie.ozetBilgi || "No info"}
                                </div>

                                <button
                                    className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white p-4 text-2xl hover:bg-white hover:bg-opacity-80 hover:text-orange-500 rounded-full"
                                    onClick={() => PlayTrailer(serie.tanitimUrl)}
                                >
                                    <IoIosPlay />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center relative top-2">
                    {Array.from({ length: Math.ceil(series.length / seriesPerPage) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-3 h-3 mx-1 rounded-full ${currentPage === index + 1 ? "bg-orange-500 bg-opacity-70" : "bg-gray-200"
                                }`}
                        ></button>
                    ))}
                </div>
            </section>
        </div>
    );
}