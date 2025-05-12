import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchMovies, Movie, SigninUser } from "../../components/Fetch/Index";

export default function Signin() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showInputs, setShowInputs] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignin = async () => {
        if (!showInputs) {
            setShowInputs(true);
            return;
        }

        setIsLoading(true);
        setMessage("");
        try {
            const response = await SigninUser(formData);
            if (response.success) {
                setMessage(response.message || "Giriş başarılı!");
                console.log("Token:", response.token);
                navigate("/home");
            } else {
                setMessage(response.message || "Giriş başarısız!");
            }
        } catch (error: any) {
            console.error("Giriş sırasında bir hata oluştu:", error);
            setMessage(error.message || "Giriş sırasında bir hata oluştu.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && showInputs) {
            handleSignin();
        }
    };

    const handleSignupRedirect = () => {
        navigate("/signup");
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen rounded-xl bg-black w-[1000px]">
            <FetchMovies onDataFetched={setMovies} />

            <div className="absolute inset-0 overflow-hidden">
                <div className="grid grid-cols-3 gap-2 opacity-20">
                    {movies.map((movie, index) => (
                        <img
                            key={index}
                            src={movie.image_url}
                            alt={movie.adi || `Movie ${index + 1}`}
                            className="w-full h-40 object-cover"
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 bg-black bg-opacity-40 p-8 rounded-xl shadow-lg w-[400px] border">
                <h1 className="text-3xl font-semibold text-white text-center mb-6">Hoş Geldiniz</h1>
                <div className="flex flex-col items-center gap-4">
                    <div
                        className={`flex flex-col gap-4 w-full transition-all duration-500 ease-in-out ${showInputs ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
                            }`}
                    >
                        <input
                            type="text"
                            name="username"
                            placeholder="Kullanıcı Adı"
                            value={formData.username}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className="border border-teal-700 rounded px-4 py-2 w-full"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Şifre"
                            value={formData.password}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className="border border-teal-700 rounded px-4 py-2 w-full"
                        />
                    </div>

                    <div className="flex gap-4 w-full">
                        <button
                            onClick={handleSignin}
                            className="w-full px-4 py-2 rounded bg-teal-700 text-white font-semibold hover:bg-teal-800 transition-all duration-300 border"
                        >
                            {showInputs ? "Giriş Yap" : "Giriş Yap"}
                        </button>
                        <button
                            onClick={handleSignupRedirect}
                            className="w-full px-4 py-2 rounded bg-teal-700 text-white font-semibold hover:bg-teal-800 transition-all duration-300 border"
                        >
                            Kayıt Ol
                        </button>
                    </div>
                </div>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
}