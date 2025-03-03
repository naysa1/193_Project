'use client';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const RevenueData = [
    { year: '2012', revenue: 436.24 },
    { year: '2013', revenue: 487.4 },
    { year: '2014', revenue: 556.85 },
    { year: '2015', revenue: 616.78 },
    { year: '2016', revenue: 660.6 },
    { year: '2017', revenue: 883.9 },
    { year: '2018', revenue: 1092.6 },
    { year: '2019', revenue: 1214 },
    { year: '2020', revenue: 1430.4 },
    { year: '2021', revenue: 1564.99 },
    { year: '2022', revenue: 1183.38 },
    { year: '2023', revenue: 890.58 }
  ];
  

const BarChartComponent = () => {
    return (
        <div style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={400} data={RevenueData} margin={{right: 30}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" stroke="white"/>
                    <YAxis stroke="white"/>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="revenue" fill="#6BB769" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
};

export default BarChartComponent;

const CustomTooltip = ({ active, payload, label}) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-600 flex flex-col gap 4 rounded-md">
                <p className="text-medium text-xl">{label}</p>
                <p className="text-medium text-xl">
                    Revenue:
                    <span className="ml-2"> ${payload[0].value}</span>
                </p>
            </div>
        );
    }
};