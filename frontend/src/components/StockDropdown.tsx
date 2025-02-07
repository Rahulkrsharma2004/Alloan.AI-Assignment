import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { setSelectedStockId } from '../stocks/stocksSlice';

const StockDropdown: React.FC = () => {
  const dispatch = useAppDispatch();
  const stocks = useAppSelector((state) => state.stocks.stocks);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedStockId(e.target.value));
  };

  return (
    <select
      onChange={handleChange}
      className="p-2 border rounded-lg shadow-sm"
    >
      <option value="">Select a stock</option>
      {stocks.map((stock) => (
        <option key={stock.id} value={stock.id}>
          {stock.name}
        </option>
      ))}
    </select>
  );
};

export default StockDropdown;