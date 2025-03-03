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

const ESG_Data = [
    {
        category: 'Society',
        score: 1.86,
    }, 
    {
        category: 'Knowledge',
        score: -0.77,
    },
    {
        category: 'Health',
        score: 1.25,
    },
    {
        category: 'Environment',
        score: -1.67,
    }
  ];
  

const BarChartComponent = () => {
    return (
        <div style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={400} data={ESG_Data} margin={{right: 30}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" stroke="white"/>
                    <YAxis stroke="white"/>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="score" fill="#6BB769" />
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
                    Score:
                    <span className="ml-2"> {payload[0].value}</span>
                </p>
            </div>
        );
    }
};