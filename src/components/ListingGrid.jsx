// 러버블에서 안티그레비티로의 마이그레이션 예시
import React from 'react';
import ListingCard from './ListingCard';

const ListingGrid = ({ items, onCardClick, favorites = [], onToggleFavorite }) => {
    if (items.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {items.map((item) => (
                <ListingCard
                    key={item.id}
                    item={item}
                    onClick={onCardClick}
                    isFavorite={favorites.includes(item.id)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
};

export default ListingGrid;
