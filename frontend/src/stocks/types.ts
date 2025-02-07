export interface Stock {
    id: string;
    name: string;
    durations: string[];
  }
  
  export interface StockDataPoint {
    timestamp: string;
    value: number;
  }
  
  export interface StockGraphData {
    stockId: string;
    duration: string;
    data: StockDataPoint[];
  }
  
  export interface StocksState {
    stocks: Stock[];
    selectedStockId: string | null;
    selectedDuration: string | null;
    graphData: StockGraphData | null;
    loading: boolean;
  }