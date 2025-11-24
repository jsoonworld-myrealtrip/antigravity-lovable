// 러버블에서 안티그레비티로의 마이그레이션 예시
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 max-w-4xl mx-auto -mt-8 relative z-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="어디로 떠나시나요?"
                        className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className="flex gap-2">
                    {/* Date Picker Dummy */}
                    {/* Date Picker */}
                    <div className="flex-1 md:w-48 flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <input
                            type="date"
                            className="bg-transparent w-full outline-none text-gray-700 text-sm font-medium cursor-pointer"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-md shadow-primary/30"
                    >
                        검색
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
