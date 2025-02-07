import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stock, StockGraphData, StocksState } from './types';

const initialState: StocksState = {
  stocks: [],
  selectedStockId: null,
  selectedDuration: null,
  graphData: null,
  loading: false,
};

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setStocks: (state, action: PayloadAction<Stock[]>) => {
      state.stocks = action.payload;
    },
    setSelectedStockId: (state, action: PayloadAction<string>) => {
      state.selectedStockId = action.payload;
    },
    setSelectedDuration: (state, action: PayloadAction<string>) => {
      state.selectedDuration = action.payload;
    },
    setGraphData: (state, action: PayloadAction<StockGraphData>) => {
      state.graphData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setStocks,
  setSelectedStockId,
  setSelectedDuration,
  setGraphData,
  setLoading,
} = stocksSlice.actions;

export default stocksSlice.reducer;