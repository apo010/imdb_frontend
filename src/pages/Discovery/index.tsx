import React, { useState } from "react";
import { FetchMovies, FetchSeries, Movie, Serie } from "../../components/Fetch/Index";
import { SlStar } from "react-icons/sl";
//keydrop
//toast
export default function Discovery() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [series, setSeries] = useState<Serie[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState<(Movie | Serie)[]>([]);

    const handleSearch = () => {
        const filteredMovies = movies.filter((movie) =>
            movie.adi.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const filteredSeries = series.filter((serie) =>
            serie.adi.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredResults([...filteredMovies, ...filteredSeries]);
    };
    return (
        <div className="pl-2 bg-white w-[610px]">
            <FetchMovies onDataFetched={(fetchedMovies) => setMovies(fetchedMovies)} />
            <FetchSeries onDataFetched={(fetchedSeries) => setSeries(fetchedSeries)} />

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Search</h2>
                <div className="flex items-center justify-center gap-4">
                    <input
                        type="text"
                        placeholder="Search for movies or series..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                        className="border border-gray-300 rounded px-4 py-2 w-1/2"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800"
                    >
                        Search
                    </button>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                <div className="grid grid-cols-2 gap-4">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((item, index) => (
                            <div key={index} className="bg-teal-900 bg-opacity-30 rounded-xl w-72 h-96">
                                <div className="relative">
                                    <img
                                        src={item.image_url}
                                        className="rounded-xl w-5/6 h-36 mt-4 ms-6"
                                    /><div className="relative left-[120px] flex text-black">
                                        <SlStar className="pe-2 text-2xl" />
                                        {item.imdbPuani || "no movie"}
                                    </div>
                                    <div className="text-black text-center font-semibold border-b">
                                        {item.adi || "No title"}
                                    </div>
                                    <div className="text-center m-2">
                                        {item.ozetBilgi || "No info"}
                                    </div>

                                </div>
                            </div>
                        ))
                    ) : (
                        <p className=" text-gray-500">No results found.</p>
                    )}
                </div>
            </section>
        </div>
    );
}