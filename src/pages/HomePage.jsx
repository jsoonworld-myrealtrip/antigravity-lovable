// 러버블에서 안티그레비티로의 마이그레이션 예시
import React, { useReducer, useMemo } from 'react';
import Header from '../components/Header';
import CategoryTabs from '../components/CategoryTabs';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ListingGrid from '../components/ListingGrid';
import BookingModal from '../components/BookingModal';
import Footer from '../components/Footer';
import { MOCK_DATA } from '../lib/data';

const initialState = {
    category: 'stay',
    searchQuery: '',
    filters: {
        price: '',
        region: '',
    },
    sortBy: 'recommend',
    modalItem: null,
    favorites: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_CATEGORY':
            return { ...state, category: action.payload };
        case 'SET_SEARCH':
            return { ...state, searchQuery: action.payload };
        case 'SET_FILTER':
            return { ...state, filters: { ...state.filters, [action.key]: action.value } };
        case 'SET_SORT':
            return { ...state, sortBy: action.payload };
        case 'OPEN_MODAL':
            return { ...state, modalItem: action.payload };
        case 'CLOSE_MODAL':
            return { ...state, modalItem: null };
        case 'TOGGLE_FAVORITE':
            const id = action.payload;
            const isFavorite = state.favorites.includes(id);
            return {
                ...state,
                favorites: isFavorite
                    ? state.favorites.filter(favId => favId !== id)
                    : [...state.favorites, id]
            };
        default:
            return state;
    }
}

const HomePage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const filteredItems = useMemo(() => {
        let items = MOCK_DATA.filter(item => item.type === state.category);

        if (state.searchQuery) {
            items = items.filter(item =>
                item.title.includes(state.searchQuery) ||
                item.location.includes(state.searchQuery)
            );
        }

        if (state.filters.region) {
            items = items.filter(item => item.location.includes(state.filters.region));
        }

        if (state.filters.price) {
            if (state.filters.price === 'low') items = items.filter(item => item.price <= 100000);
            if (state.filters.price === 'mid') items = items.filter(item => item.price > 100000 && item.price <= 300000);
            if (state.filters.price === 'high') items = items.filter(item => item.price > 300000);
        }

        switch (state.sortBy) {
            case 'price_asc':
                items.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                items.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                items.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        return items;
    }, [state.category, state.searchQuery, state.filters, state.sortBy]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="bg-white pb-12 border-b border-gray-200">
                <Header />
                <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        여행의 모든 것,<br />마이리얼트립 프로토타입
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        전 세계 숙소, 투어, 티켓, 항공권을 예약하세요.
                    </p>
                    <CategoryTabs
                        activeCategory={state.category}
                        onCategoryChange={(cat) => dispatch({ type: 'SET_CATEGORY', payload: cat })}
                    />
                </div>
            </div>

            {/* Search & Filter */}
            <div className="px-4">
                <SearchBar onSearch={(q) => dispatch({ type: 'SET_SEARCH', payload: q })} />
                <FilterBar
                    onFilterChange={(key, value) => dispatch({ type: 'SET_FILTER', key, value })}
                    onSortChange={(sort) => dispatch({ type: 'SET_SORT', payload: sort })}
                />
            </div>

            {/* Listings */}
            <main className="max-w-7xl mx-auto">
                <div className="px-4 mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {state.category === 'stay' ? '추천 숙소' : state.category === 'tour' ? '인기 투어' : '특가 항공권'}
                    </h2>
                </div>
                <ListingGrid
                    items={filteredItems}
                    onCardClick={(item) => dispatch({ type: 'OPEN_MODAL', payload: item })}
                    favorites={state.favorites}
                    onToggleFavorite={(id) => dispatch({ type: 'TOGGLE_FAVORITE', payload: id })}
                />
            </main>

            <Footer />

            {/* Modal */}
            {state.modalItem && (
                <BookingModal
                    item={state.modalItem}
                    onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
                />
            )}
        </div>
    );
};

export default HomePage;
