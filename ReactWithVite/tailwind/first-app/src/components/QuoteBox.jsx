import { useState, useEffect } from "react";
import GetQuoteButton from "./GetQuoteButton";
import { BASE_URL } from "../constants/url";
import Loading from "./Loading";


const QuoteBox = () => {
    const [qoute, setQoute] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRandomQoute = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${BASE_URL}/random`);
            const data = await response.json();
            if (!response.ok) {
                setError("Failed to fetch random quote");
                throw new Error(data.message || "Something went wrong");
            }
            setQoute(data);
            setLoading(false);
        }
        catch (error) {
            console.error("Error fetching random quote:", error);
        }

    }

    useEffect(() => {
        fetchRandomQoute();
    }, []);

    if (error) {
        return (
            <div className="max-w-2xl w-full  backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                <p className="text-2xl font-light text-white text-center mb-6 leading-relaxed ">
                    {error}
                </p>
                <GetQuoteButton onFetch={fetchRandomQoute} />
            </div>
        );
    }

    return (
        <div className="max-w-2xl w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <blockquote className="text-2xl font-light text-white mb-6 leading-relaxed">
                        &ldquo;{qoute?.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-between">
                        <cite className="text-white/80 font-medium text-lg not-italic">
                            — {qoute?.author}
                        </cite>
                        <GetQuoteButton onFetch={fetchRandomQoute} />
                    </div>
                </>
            )}
        </div>
    );


}

export default QuoteBox;