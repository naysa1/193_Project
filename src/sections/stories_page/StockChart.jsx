'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const stockData = [
    { date: '04/01/2020', close: 83.90 },
    { date: '07/01/2020', close: 75.90 },
    { date: '10/01/2020', close: 80.29 },
    { date: '01/01/2021', close: 122.18 },
    { date: '04/01/2021', close: 93.39 },
    { date: '07/01/2021', close: 78.50 },
    { date: '10/01/2021', close: 65.88 },
    { date: '01/01/2022', close: 63.40 },
    { date: '04/01/2022', close: 36.75 },
    { date: '01/01/2023', close: 43.64 },
    { date: '04/01/2023', close: 45.25 },
    { date: '07/01/2023', close: 37.90 },
    { date: '10/01/2023', close: 38.70 },
    { date: '07/01/2024', close: 8.69 },
    { date: '10/01/2024', close: 7.75 },
    { date: '01/01/2025', close: 6.48 },
];


// LineChart component using stock data
const LineChartComponent = () => {
    return (
        <div style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={600} height={600} data={stockData} margin={{ right: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" stroke="white" />
                    <YAxis stroke="white" label={{ value: 'Stock Price (USD)', angle: -90, position: 'insideLeft'}} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="close" stroke="white" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent;

// Custom Tooltip to display stock data on hover
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-600 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-xl">{label}</p>
                <p className="text-medium text-xl">
                    Closing Price: <span className="ml-2">${payload[0].value}</span>
                </p>
            </div>
        );
    }
};
