// 러버블에서 안티그레비티로의 마이그레이션 예시
import React from 'react';

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
    const categories = [
        { id: 'stay', label: '숙소', icon: '🏠' },
        { id: 'tour', label: '투어·티켓', icon: '🎫' },
        { id: 'flight', label: '항공', icon: '✈️' },
    ];

    return (
        <div className="flex justify-center gap-8 pt-8 pb-12">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onCategoryChange(cat.id)}
                    className={`flex flex-col items-center gap-2 group transition-all duration-300 ${activeCategory === cat.id ? 'text-white scale-110' : 'text-white/70 hover:text-white hover:scale-105'
                        }`}
                >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg backdrop-blur-sm transition-all duration-300 ${activeCategory === cat.id
                            ? 'bg-white/20 ring-2 ring-white/50'
                            : 'bg-white/10 group-hover:bg-white/20'
                        }`}>
                        {cat.icon}
                    </div>
                    <span className="font-semibold text-sm tracking-wide">{cat.label}</span>
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
