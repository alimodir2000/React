const GetQuoteButton = ({ onFetch }) => {
    return (
        <button
            onClick={onFetch}
            className="px-6 py-3 bg-white/20 
            hover:bg-white/30 text-white rounded-lg transition-all 
            duration-300 transform hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-white/50
            active:scale-95 "
        >
            <div className="flex items-center space-x-2">
                <span>New Quote</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                </svg>
            </div>

        </button>
    );

}

export default GetQuoteButton;