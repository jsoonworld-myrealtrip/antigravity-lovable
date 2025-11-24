import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-gray-600">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-lg">M</span>
                            <span className="font-bold text-xl text-gray-900">Myrealtrip</span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-500 mb-6">
                            여행의 모든 것, 마이리얼트립.<br />
                            전 세계 숙소, 투어, 티켓, 항공권을<br />
                            한곳에서 예약하세요.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Dummy */}
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                                📷
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                                📘
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                                🐦
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">소개</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">회사 소개</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">채용</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">공지사항</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">파트너</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">파트너 등록하기</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Affiliate 프로그램</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">리얼파트너</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">파트너 블로그</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">지원</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">고객센터</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">자주 묻는 질문</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">이용약관</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">개인정보처리방침</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© 2024 Myrealtrip Prototype. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>사업자등록번호: 000-00-00000</span>
                        <span>통신판매업신고번호: 2024-서울강남-00000</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
