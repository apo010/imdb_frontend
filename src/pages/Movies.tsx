import React, { useState } from 'react';
import { FetchMovies, Movie } from '../components/Fetch/Index';
import { SlStar } from "react-icons/sl";
import { IoIosPlay } from "react-icons/io";

export default function Movies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 4;

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

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
        <div className="pl-2 bg-white w-[610px]">
            <FetchMovies onDataFetched={setMovies} />
            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">All Movies</h2>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    {currentMovies.map((movie, index) => (
                        <div key={index} className='bg-teal-900 bg-opacity-30 rounded-xl w-72 h-96'>
                            <div key={index} className="relative">
                                <img
                                    src={movie.image_url}
                                    className="rounded-xl w-5/6 h-36 mt-4 ms-6"
                                /><div className="relative left-[120px] flex text-black">
                                    <SlStar className="pe-2 text-2xl" />
                                    {movie.imdbPuani || "no movie"}
                                </div>
                                <div className=" text-black text-center font-semibold border-b ">
                                    {movie.adi || "No movie"}
                                </div>
                                <div className='text-center m-2'>
                                    {movie.ozetBilgi || "no info"}
                                </div>
                                <div className="absolute top-28 left-10 flex text-white">
                                    <SlStar className="pe-2 text-2xl" />
                                    {movie.imdbPuani || "no movie"}
                                </div>
                                <button
                                    className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white p-4 text-2xl hover:bg-white hover:bg-opacity-80 hover:text-orange-500 rounded-full"
                                    onClick={() => PlayTrailer(movie.tanitimUrl)}
                                >
                                    <IoIosPlay />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center relative top-2 ">
                    {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-3 h-3 mx-1 rounded-full ${currentPage === index + 1 ? "bg-orange-500 bg-opacity-70" : "bg-gray-200"}`}
                        ></button>
                    ))}
                </div>
            </section>
        </div>
    );
}