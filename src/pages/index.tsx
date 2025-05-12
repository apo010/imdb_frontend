import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupUser, FetchSeries, Serie } from "../components/Fetch/Index";

export default function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showInputs, setShowInputs] = useState(false);
    const [series, setSeries] = useState<Serie[]>([]);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignup = async () => {
        if (!showInputs) {
            setShowInputs(true);
            return;
        }

        setIsLoading(true);
        setMessage("");
        try {
            const response = await SignupUser(formData);
            if (response.success) {
                setMessage(response.message || "Kayıt başarılı!");
                navigate("/signin");
            } else {
                setMessage(response.message || "Kayıt başarısız!");
            }
        } catch (error: any) {
            console.error("Kayıt sırasında bir hata oluştu:", error);
            setMessage(error.message || "Kayıt sırasında bir hata oluştu.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSignup();
        }
    };

    const handleSigninRedirect = () => {
        navigate("/signin");
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen w-[1000px] bg-black rounded-xl">
            <FetchSeries onDataFetched={setSeries} />

            <div className="absolute inset-0 overflow-hidden">
                <div className="grid grid-cols-3 gap-2 opacity-20">
                    {series.map((serie, index) => (
                        <img
                            key={index}
                            src={serie.image_url}
                            alt={serie.adi || `Serie ${index + 1}`}
                            className="w-full h-40 object-cover"
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 bg-black bg-opacity-40 p-8 rounded-xl shadow-lg w-[400px] border">
                <h1 className="text-3xl font-semibold text-white text-center mb-6">Lütfen Kayıt Olunuz</h1>
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
                            type="email"
                            name="email"
                            placeholder="E-posta"
                            value={formData.email}
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
                            onClick={handleSignup}
                            className="w-full px-4 py-2 rounded bg-teal-700 text-white font-semibold hover:bg-teal-800 transition-all duration-300 border"
                        >
                            {showInputs ? "Kayıt Ol" : "Kayıt Ol"}
                        </button>
                        <button
                            onClick={handleSigninRedirect}
                            className="w-full px-4 py-2 rounded bg-teal-700 text-white font-semibold hover:bg-teal-800 transition-all duration-300 border"
                        >
                            Giriş Yap
                        </button>
                    </div>
                </div>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
}