import React, { useState } from "react";
import { FetchMovies, Movie } from "../../components/Fetch/Index";
import { SlStar } from "react-icons/sl";
import { IoIosPlay } from "react-icons/io";

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [moviesPage, setMoviesPage] = useState(1);
    const [trailersPage, setTrailersPage] = useState(1);
    const [topRatedPage, setTopRatedPage] = useState(1);
    const moviesPerPage = 2;
    const trailersPerPage = 3;
    const topRatedPerPage = 3;

    const PageChange = (page: number) => {
        setMoviesPage(page);
    };

    const TrailersPageChange = (page: number) => {
        setTrailersPage(page);
    };

    const TopRatedPageChange = (page: number) => {
        setTopRatedPage(page);
    };

    const PlayTrailer = (tanitimUrl: string | undefined) => {
        if (tanitimUrl) {
            window.open(tanitimUrl, "_blank");
        } else {
            alert("Fragman bulunamadı!");
        }
    };

    const indexOfLastMovie = moviesPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const protestoIndex = movies.findIndex((movie) => movie.adi === "Protesto");
    const Movies = movies
        .slice(0, protestoIndex + 1)
        .slice(indexOfFirstMovie, indexOfLastMovie);

    const filteredMovies = movies.filter((movie) => movie.id >= 9 && movie.id < 12);
    const indexOfLastTrailer = trailersPage * trailersPerPage;
    const indexOfFirstTrailer = indexOfLastTrailer - trailersPerPage;
    const currentTrailers = filteredMovies.slice(indexOfFirstTrailer, indexOfLastTrailer);

    const topRatedMovies = movies.filter((movie) => movie.id >= 13 && movie.id <= 16);
    const indexOfLastTopRated = topRatedPage * topRatedPerPage;
    const indexOfFirstTopRated = indexOfLastTopRated - topRatedPerPage;
    const currentTopRated = topRatedMovies.slice(indexOfFirstTopRated, indexOfLastTopRated);

    return (
        <div className="pl-2 bg-white w-[610px]">
            <FetchMovies onDataFetched={setMovies} />

            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Popular Movies</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {Movies.map((movie, index) => (
                        <div key={index} className="relative">
                            <img
                                src={movie.image_url}
                                className="rounded-xl w-72 h-40"
                            />
                            <div className="absolute bottom-2 flex left-3 text-white">
                                <SlStar className="pe-2 text-2xl" />
                                {movie.imdbPuani || "no movie"}
                            </div>
                            <button
                                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white p-4 text-2xl hover:bg-white hover:bg-opacity-80 hover:text-orange-500 rounded-full"
                                onClick={() => PlayTrailer(movie.tanitimUrl)}
                            >
                                <IoIosPlay />
                            </button>
                            <div className="absolute text-black font-semibold">
                                {movie.adi || "No movie"}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center relative top-8">
                    {Array.from({ length: Math.ceil((protestoIndex + 1) / moviesPerPage) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => PageChange(index + 1)}
                            className={`w-3 h-3 mx-1 rounded-full ${moviesPage === index + 1 ? "bg-orange-500 bg-opacity-70" : "bg-gray-200"}`}
                        ></button>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">New Trailers</h2>
                <div className="grid grid-flow-col gap-4">
                    {currentTrailers.map((movie, index) => (
                        <div key={index} className="relative">
                            <img
                                src={movie.image_url}
                                className="rounded-xl w-48 h-32 object-cover"
                            />
                            <div className="flex absolute bottom-2 left-3 text-white">
                                <SlStar className="pe-2 text-2xl" />
                                {movie.imdbPuani || "no movie"}
                            </div>
                            <button
                                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white p-4 text-xl hover:bg-white hover:bg-opacity-80 hover:text-orange-500 rounded-full"
                                onClick={() => PlayTrailer(movie.tanitimUrl)}
                            >
                                <IoIosPlay className="" />
                            </button>
                            <div className="absolute text-black font-semibold text-sm w-64">
                                {movie.adi || "No movie"}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center relative top-8">
                    {Array.from({ length: Math.ceil(filteredMovies.length / trailersPerPage) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => TrailersPageChange(index + 1)}
                            className={`w-3 h-3 mx-1 rounded-full ${trailersPage === index + 1 ? "bg-orange-500 bg-opacity-70" : "bg-gray-200"}`}
                        ></button>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
                <div className="grid grid-cols-3 gap-4">
                    {currentTopRated.map((movie, index) => (
                        <div key={index} className="relative">
                            <img
                                src={movie.image_url}
                                className="rounded-xl w-48 h-32 object-cover"
                            />
                            <div className="flex absolute bottom-2 left-3 text-white">
                                <SlStar className="pe-2 text-2xl" />
                                {movie.imdbPuani || "no movie"}
                            </div>
                            <button
                                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white p-4 text-xl hover:bg-white hover:bg-opacity-80 hover:text-orange-500 rounded-full"
                                onClick={() => PlayTrailer(movie.tanitimUrl)}
                            >
                                <IoIosPlay className="" />
                            </button>
                            <div className="absolute text-black font-semibold text-sm w-64">
                                {movie.adi || "No movie"}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center relative top-8">
                    {Array.from({ length: Math.ceil(topRatedMovies.length / topRatedPerPage) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => TopRatedPageChange(index + 1)}
                            className={`w-3 h-3 mx-1 rounded-full ${topRatedPage === index + 1 ? "bg-orange-500 bg-opacity-70" : "bg-gray-200"
                                }`}
                        ></button>
                    ))}
                </div>
            </section>
        </div>
    );
}
