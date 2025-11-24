// 러버블에서 안티그레비티로의 마이그레이션 예시
import React from 'react';

const FilterBar = ({ onFilterChange, onSortChange }) => {
    return (
        <div className="flex flex-wrap gap-3 py-6 px-4 max-w-7xl mx-auto items-center">
            <select
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-primary focus:outline-none focus:border-primary transition-colors cursor-pointer"
                onChange={(e) => onFilterChange('price', e.target.value)}
            >
                <option value="">가격대 전체</option>
                <option value="low">10만원 이하</option>
                <option value="mid">10만원 - 30만원</option>
                <option value="high">30만원 이상</option>
            </select>

            <select
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-primary focus:outline-none focus:border-primary transition-colors cursor-pointer"
                onChange={(e) => onFilterChange('region', e.target.value)}
            >
                <option value="">모든 지역</option>
                <option value="제주">제주도</option>
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="강원">강원도</option>
                <option value="경주">경주</option>
                <option value="일본">일본</option>
                <option value="베트남">베트남</option>
                <option value="태국">태국</option>
                <option value="프랑스">프랑스</option>
                <option value="미국">미국</option>
            </select>

            <div className="flex-1"></div>

            <select
                className="px-4 py-2 rounded-lg border-none bg-transparent text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer focus:ring-0"
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="recommend">추천순</option>
                <option value="price_asc">낮은 가격순</option>
                <option value="price_desc">높은 가격순</option>
                <option value="rating">평점순</option>
            </select>
        </div>
    );
};

export default FilterBar;
