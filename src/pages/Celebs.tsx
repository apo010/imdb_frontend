import React, { useState } from 'react';
import { FetchCelebs } from '../components/Fetch/Index';

interface Celeb {
    id: number;
    name: string;
    image: string;
    height: number;
    discography: string;
    birthday: Date;
}

export default function Celebs() {
    const [celebs, setCelebs] = useState<Celeb[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const celebsPerPage = 4;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const indexOfLastCeleb = currentPage * celebsPerPage;
    const indexOfFirstCeleb = indexOfLastCeleb - celebsPerPage;
    const currentCelebs = celebs.slice(indexOfFirstCeleb, indexOfLastCeleb);

    return (
        <div className="pl-2 bg-white w-[610px]">
            <FetchCelebs onDataFetched={setCelebs} />
            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">All Celebs</h2>
                </div>
                <div className="flex flex-col gap-4">
                    {currentCelebs.map((celeb) => (
                        <div key={celeb.id} className="flex bg-teal-900 bg-opacity-30 rounded-xl w-full h-36 p-4">
                            <img
                                src={celeb.image}
                                alt={celeb.name}
                                className="rounded-xl w-24 h-full object-cover"
                            />
                            <div className="ml-4 flex flex-col justify-center">
                                <h3 className="text-lg font-bold">{celeb.name || "No Name"}</h3>
                                <p><strong>Height:</strong> {celeb.height ? `${celeb.height} cm` : "Unknown"}</p>
                                <p><strong>Birthday:</strong> {celeb.birthday ? new Date(celeb.birthday).toLocaleDateString() : "Unknown"}</p>
                                <p><strong>Discography:</strong> {celeb.discography || "No information available"}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center relative top-2">
                    {Array.from({ length: Math.ceil(celebs.length / celebsPerPage) }, (_, index) => (
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