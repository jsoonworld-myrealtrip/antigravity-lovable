// 러버블에서 안티그레비티로의 마이그레이션 예시
import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
            <div className="font-bold text-2xl tracking-tight flex items-center gap-2 text-gray-900">
                <span className="bg-gradient-to-br from-primary to-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-lg">M</span>
                Myrealtrip Prototype
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
                <button className="hover:text-primary transition-colors">파트너 등록</button>
                <button className="hover:text-primary transition-colors">로그인</button>
                <button className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-4 py-2 rounded-full transition-opacity">회원가입</button>
            </div>
            <button className="md:hidden text-gray-700 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    );
};

export default Header;
