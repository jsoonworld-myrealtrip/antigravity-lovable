// 러버블에서 안티그레비티로의 마이그레이션 예시
import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto text-white">
            <div className="font-bold text-2xl tracking-tight flex items-center gap-2">
                <span className="bg-white text-primary w-8 h-8 rounded-lg flex items-center justify-center font-black text-lg">M</span>
                Myrealtrip Prototype
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium">
                <button className="hover:text-white/80 transition-colors">파트너 등록</button>
                <button className="hover:text-white/80 transition-colors">로그인</button>
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors backdrop-blur-sm">회원가입</button>
            </div>
            <button className="md:hidden text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    );
};

export default Header;
