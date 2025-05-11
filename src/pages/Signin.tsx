import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SigninUser } from "../components/Fetch/Index";

export default function Signin() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSignin = async () => {
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

    const handleSignupRedirect = () => {
        navigate("/signup");
    };

    return (
        <div className="flex flex-col items-center justify-center w-[610px] h-[500px]">
            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-8 rounded-xl border border-teal-700 shadow-lg">
                <div className="flex flex-col gap-4 items-center border border-teal-700 rounded-xl p-8 bg-white shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Giriş Yap</h1>
                    <input
                        type="text"
                        name="username"
                        placeholder="Kullanıcı Adı"
                        value={formData.username}
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
                                handleSignin();
                            }
                        }}
                        className="border border-teal-700 rounded px-4 py-2 w-60"
                    />
                    <div className="flex gap-4">
                        <button
                            onClick={handleSignin}
                            disabled={isLoading}
                            className={`px-4 py-2 rounded ${isLoading
                                ? "cursor-not-allowed"
                                : "bg-teal-700 text-white hover:bg-teal-800"
                                }`}
                        >
                            {isLoading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                        </button>
                        <button
                            onClick={handleSignupRedirect}
                            className="px-4 py-2 rounded bg-teal-700 text-white hover:bg-teal-800"
                        >
                            Kayıt Ol
                        </button>
                    </div>
                </div>
                {message && <p className="absolute bottom-48 text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
}