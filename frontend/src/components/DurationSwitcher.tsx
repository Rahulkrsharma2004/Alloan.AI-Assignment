import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { setSelectedDuration } from '../stocks/stocksSlice';

const DurationSwitcher: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedStockId = useAppSelector((state) => state.stocks.selectedStockId);
  const stocks = useAppSelector((state) => state.stocks.stocks);
  const selectedStock = stocks.find((stock) => stock.id === selectedStockId);

  if (!selectedStock) return null;

  return (
    <div className="flex space-x-2">
      {selectedStock.durations.map((duration) => (
        <button
          key={duration}
          onClick={() => dispatch(setSelectedDuration(duration))}
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          {duration}
        </button>
      ))}
    </div>
  );
};

export default DurationSwitcher;