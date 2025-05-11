import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupUser } from "../components/Fetch/Index";

export default function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignup = async () => {
        setIsLoading(true);
        setMessage("");
        try {
            const response = await SignupUser(formData);
            if (response.success) {
                setMessage(response.message || "Kayıt başarılı!");
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

    const handleSigninRedirect = () => {
        navigate("/signin");
    };

    return (
        <div className="flex flex-col items-center justify-center w-[610px] h-[500px]">
            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-8 rounded-xl border border-teal-700 shadow-lg">
                <div className="flex flex-col gap-4 items-center border border-teal-700 rounded-xl p-8 bg-white shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Kayıt Ol</h1>
                    <input
                        type="text"
                        name="username"
                        placeholder="Kullanıcı Adı"
                        value={formData.username}
                        onChange={handleChange}
                        className="border border-teal-700 rounded px-4 py-2 w-60"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-posta"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-teal-700 rounded px-4 py-2 w-60"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Şifre"
                        value={formData.password}
                        onChange={handleChange}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                handleSignup();
                            }
                        }}
                        className="border border-teal-700 rounded px-4 py-2 w-60"
                    />
                    <div className="flex gap-4">
                        <button
                            onClick={handleSignup}
                            disabled={isLoading}

                            className={`px-4 py-2 rounded ${isLoading
                                ? "cursor-not-allowed"
                                : "bg-teal-700 text-white hover:bg-teal-800"
                                }`}
                        >
                            {isLoading ? "Kayıt Oluyor..." : "Kayıt Ol"}
                        </button>
                        <button
                            onClick={handleSigninRedirect}
                            className="px-4 py-2 rounded bg-teal-700 text-white hover:bg-teal-800"
                        >
                            Giriş Yap
                        </button>
                    </div>
                </div>
                {message && <p className="absolute bottom-40 text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
}