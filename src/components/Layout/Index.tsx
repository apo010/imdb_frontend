import React from "react";
import Header from "../Header/Index.tsx";
import Sidebar from "../Sidebar/Index.tsx";
import Rightbar from "../Rightbar/Index.tsx";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-full w-auto m-28">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Header />
                <main className="flex-grow bg-white p-4">{children}</main>
            </div>
            <Rightbar />
        </div>
    );
}