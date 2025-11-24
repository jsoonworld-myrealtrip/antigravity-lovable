// 러버블에서 안티그레비티로의 마이그레이션 예시
import React from 'react';

/**
 * ListingCard Component
 * Displays individual listing details including image, title, price, and rating.
 * Handles click events to open booking modal.
 */
const ListingCard = ({ item, onClick, isFavorite, onToggleFavorite }) => {
    return (
        <div
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer group border border-gray-100"
            onClick={() => onClick(item)}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                    <button
                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite && onToggleFavorite(item.id);
                        }}
                    >
                        <svg
                            className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'fill-none stroke-current'}`}
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-gray-700 shadow-sm flex items-center">
                        {item.type === 'stay' ? '숙소' : item.type === 'tour' ? '투어' : '항공'}
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{item.title}</h3>
                </div>

                <p className="text-sm text-gray-500 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                </p>

                <div className="flex justify-between items-end">
                    <div>
                        <div className="flex items-center mb-1">
                            <span className="text-yellow-400 mr-1">★</span>
                            <span className="font-semibold text-sm">{item.rating}</span>
                            <span className="text-gray-400 text-xs ml-1">({item.reviews})</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-400">1박 / 1인 기준</p>
                        <p className="font-bold text-lg text-primary">
                            {item.price.toLocaleString()}원
                        </p>
                    </div>
                </div>

                <button
                    className="w-full mt-4 bg-primary/10 text-primary hover:bg-primary hover:text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick(item);
                    }}
                >
                    예약하기
                </button>
            </div>
        </div>
    );
};

export default ListingCard;
