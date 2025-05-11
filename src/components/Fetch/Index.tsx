import { useEffect } from "react";

export interface Movie {
    adi: string;
    id: number;
    imdbPuani: number;
    image_url: string;
    tanitimUrl: string;
    ozetBilgi: string;
}
export interface Serie {
    adi: string;
    id: number;
    imdbPuani: number;
    image_url: string;
    tanitimUrl: string;
    ozetBilgi: string;
    episodes: number;
}
interface Celeb {
    id: number;
    name: string;
    image: string;
    height: number;
    discography: string;
    birthday: Date;
}
interface FetchCelebsProps {
    onDataFetched: (celebs: Celeb[]) => void;
}
interface FetchSerieProps {
    onDataFetched: (series: Serie[]) => void;
}

interface FetchMoviesProps {
    onDataFetched: (movies: Movie[]) => void;
}

export function FetchMovies({ onDataFetched }: FetchMoviesProps) {
    useEffect(() => {
        fetch("http://localhost:3000/filmler/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.data) {
                    onDataFetched(data.data);
                }
            })
            .catch((error) => {
                console.error("Filmler API'sinden veri alınırken hata oluştu:", error);
                onDataFetched([]);
            });
    }, []);

    return null;
}

export function FetchSeries({ onDataFetched }: FetchSerieProps) {
    useEffect(() => {
        fetch("http://localhost:3000/diziler/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.data) {
                    onDataFetched(data.data);
                }
            })
            .catch((error) => {
                console.error("Diziler API'sinden veri alınırken hata oluştu:", error);
                onDataFetched([]);
            });
    }, []);

    return null;
}

export async function SignupUser({
    username,
    email,
    password,
}: {
    username: string;
    email: string;
    password: string;
}) {
    try {
        const response = await fetch("http://localhost:3000/signup/kayit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Kayıt API'sinden hata yanıtı alındı:", errorData);
            throw new Error(errorData.message || "Kayıt API'sinden hata alındı.");
        }

        const data = await response.json();
        console.log("Kayıt API'sinden başarılı yanıt alındı:", data);
        return data;
    } catch (error: any) {
        console.error("Kayıt API'sinden veri alınırken hata oluştu:", error);
        throw new Error(error.message || "Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    }
}

export async function SigninUser({
    username,
    password,
}: {
    username: string;
    password: string;
}) {
    try {
        const response = await fetch("http://localhost:3000/signin/giris", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Giriş API'sinden hata yanıtı alındı:", errorData);
            throw new Error(errorData.message || "Giriş API'sinden hata alındı.");
        }

        const data = await response.json();
        console.log("Giriş API'sinden başarılı yanıt alındı:", data);
        return data;
    } catch (error: any) {
        console.error("Giriş API'sinden veri alınırken hata oluştu:", error);
        throw new Error(error.message || "Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    }
}
export function FetchCelebs({ onDataFetched }: FetchCelebsProps) {
    useEffect(() => {
        fetch("http://localhost:3000/celebs/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.data) {
                    onDataFetched(data.data);
                }
            })
            .catch((error) => {
                console.error("Ünlüler API'sinden veri alınırken hata oluştu:", error);
                onDataFetched([]);
            });
    }, []);

    return null;
}