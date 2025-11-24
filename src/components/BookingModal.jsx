// 러버블에서 안티그레비티로의 마이그레이션 예시
import React, { useState } from 'react';

const BookingModal = ({ item, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);

    if (!item) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scaleIn">
                <div className="relative h-48">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6">
                    <div className="mb-4">
                        <span className="text-primary font-semibold text-sm bg-primary/10 px-2 py-1 rounded-md">
                            {item.type === 'stay' ? '숙소' : item.type === 'tour' ? '투어' : '항공'}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 mt-2">{item.title}</h2>
                        <p className="text-gray-500 mt-1">{item.location}</p>
                    </div>

                    <div className="border-t border-b border-gray-100 py-4 mb-6 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">기본 요금</span>
                            <span className="font-medium">{item.price.toLocaleString()}원</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">세금 및 봉사료</span>
                            <span className="font-medium">{(item.price * 0.1).toLocaleString()}원</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-primary pt-2">
                            <span>총 합계</span>
                            <span>{(item.price * 1.1).toLocaleString()}원</span>
                        </div>
                    </div>

                    <button
                        className={`w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all transform active:scale-95 flex justify-center items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        onClick={() => {
                            if (isLoading) return;
                            setIsLoading(true);
                            setTimeout(() => {
                                setIsLoading(false);
                                alert('예약이 완료되었습니다! (프로토타입)');
                                onClose();
                            }, 1500);
                        }}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            '결제하고 예약하기'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
