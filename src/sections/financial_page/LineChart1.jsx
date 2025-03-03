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

// Use your provided data
const marginData = [
    { date: '09/30/2019', netMargin: 7.72, operatingMargin: 8.52, grossMargin: 47.88 },
    { date: '12/31/2019', netMargin: 7.03, operatingMargin: 7.13, grossMargin: 44.80 },
    { date: '03/31/2020', netMargin: 3.82, operatingMargin: 3.78, grossMargin: 42.98 },
    { date: '06/30/2020', netMargin: 8.08, operatingMargin: 9.18, grossMargin: 47.30 },
    { date: '09/30/2020', netMargin: 11.72, operatingMargin: 11.25, grossMargin: 47.56 },
    { date: '12/31/2020', netMargin: 10.28, operatingMargin: 10.23, grossMargin: 46.86 },
    { date: '03/31/2021', netMargin: 11.20, operatingMargin: 11.20, grossMargin: 46.41 },
    { date: '06/30/2021', netMargin: 6.84, operatingMargin: 6.12, grossMargin: 41.56 },
    { date: '09/30/2021', netMargin: 4.55, operatingMargin: 3.57, grossMargin: 38.69 },
    { date: '12/31/2021', netMargin: 1.94, operatingMargin: -0.07, grossMargin: 35.16 },
    { date: '03/31/2022', netMargin: -0.48, operatingMargin: -1.98, grossMargin: 34.43 },
    { date: '06/30/2022', netMargin: -3.33, operatingMargin: -6.53, grossMargin: 33.03 },
    { date: '09/30/2022', netMargin: -18.24, operatingMargin: -15.65, grossMargin: 30.48 },
    { date: '12/31/2022', netMargin: -24.19, operatingMargin: -20.31, grossMargin: 29.58 },
    { date: '03/31/2023', netMargin: -32.04, operatingMargin: -28.37, grossMargin: 26.56 },
    { date: '06/30/2023', netMargin: -36.24, operatingMargin: -29.58, grossMargin: 24.38 },
    { date: '09/30/2023', netMargin: -34.56, operatingMargin: -31.53, grossMargin: 23.75 },
    { date: '12/31/2023', netMargin: -34.21, operatingMargin: -29.65, grossMargin: 22.03 },
    { date: '03/31/2024', netMargin: -32.04, operatingMargin: -28.37, grossMargin: 26.56 },
    { date: '06/30/2024', netMargin: -25.09, operatingMargin: -19.86, grossMargin: 20.93 },
    { date: '09/30/2024', netMargin: -16.15, operatingMargin: -11.52, grossMargin: 22.50 },
];

const LineChartComponent = () => {
    return (
        <div style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={600} height={600} data={marginData} margin={{ right: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" stroke="white" />
                    <YAxis stroke="white" label={{ value: 'Margin (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="netMargin" stroke="#eb4034" />
                    <Line type="monotone" dataKey="operatingMargin" stroke="#34eb74" />
                    <Line type="monotone" dataKey="grossMargin" stroke="#eb34a8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-600 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-xl">{label}</p>
                <p className="text-medium text-xl">
                    Net Margin: <span className="ml-2">{payload[0].value}%</span>
                </p>
                <p className="text-medium text-xl">
                    Operating Margin: <span className="ml-2">{payload[1].value}%</span>
                </p>
                <p className="text-medium text-xl">
                    Gross Margin: <span className="ml-2">{payload[2].value}%</span>
                </p>
            </div>
        );
    }
};
