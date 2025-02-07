import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { StockGraphData, StocksState } from './types';
import { AppDispatch, RootState } from '../../store';

// Fetch stocks
export const fetchStocks = createAsyncThunk(
  'stocks/fetchStocks',
  async (_, { dispatch }) => {
    const response = await axios.get('http://localhost:3000/api/stocks');
    dispatch(setStocks(response.data));
  }
);

// Fetch stock graph data
export const fetchStockGraphData = createAsyncThunk(
  'stocks/fetchStockGraphData',
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    const { selectedStockId, selectedDuration } = state.stocks;

    if (!selectedStockId || !selectedDuration) return;

    dispatch(setLoading(true));

    const poll = async () => {
      const response = await axios.post(
        `http://localhost:3000/api/stocks/${selectedStockId}`,
        { duration: selectedDuration }
      );

      dispatch(
        setGraphData({
          stockId: selectedStockId,
          duration: selectedDuration,
          data: response.data,
        })
      );

      if (response.data.length < 100) {
        // Simulate polling until all data is fetched
        setTimeout(poll, 1000);
      } else {
        dispatch(setLoading(false));
      }
    };

    poll();
  }
);