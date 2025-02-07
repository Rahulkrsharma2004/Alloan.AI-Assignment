import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchStocks, fetchStockGraphData } from '../stocks/stocksThunks';
import StockDropdown from '../components/StockDropdown';
import DurationSwitcher from '../components/DurationSwitcher';
import StockGraph from '../components/StockGraph';
import Loader from '../components/Loader';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedStockId, selectedDuration, loading } = useAppSelector(
    (state) => state.stocks
  );

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  useEffect(() => {
    if (selectedStockId && selectedDuration) {
      dispatch(fetchStockGraphData());
    }
  }, [selectedStockId, selectedDuration, dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Data Visualization</h1>
      <div className="space-y-4">
        <StockDropdown />
        <DurationSwitcher />
        {loading ? <Loader /> : <StockGraph />}
      </div>
    </div>
  );
};

export default HomePage;