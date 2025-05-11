import React from "react";

export default function MoviesTable({ movies }) {
    if (!Array.isArray(movies)) {
        return <p>Geçerli bir film listesi bulunamadı.</p>;
    }

    return (
        <div className="overflow-x-auto w-64">
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2 text-left">Film Adı</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Yıl</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={index} className="hover:bg-orange-500 hover:bg-opacity-60">
                            <td className="border border-gray-300 px-4 py-2">{movie.adi}</td>
                            <td className="border border-gray-300 px-4 py-2">{new Date(movie.cikisTarihi).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}