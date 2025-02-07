import React, { useEffect } from 'react'; 
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useAppSelector } from '../store';

Chart.register(...registerables);

const StockGraph: React.FC = () => {
  const graphData = useAppSelector((state) => state.stocks.graphData);

  if (!graphData) return <p>No data available</p>;

  const data = {
    labels: graphData.data.map((point) => point.timestamp),
    datasets: [
      {
        label: 'Stock Value',
        data: graphData.data.map((point) => point.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="w-full h-96">
      <Line data={data} />
    </div>
  );
};

export default StockGraph;