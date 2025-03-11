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
    { quarter: '2023 Q1', reported: -1.67, estimated: -1.32 },
    { quarter: '2023 Q2', reported: -1.42, estimated: -1.51 },
    { quarter: '2023 Q3', reported: -2.82, estimated: -1.67 },
    { quarter: '2023 Q4', reported: -1.81, estimated: -2.11 },
    { quarter: '2024 Q1', reported: -1.53, estimated: -2.01 },
    { quarter: '2024 Q2', reported: -1.96, estimated: -1.77 },
    { quarter: '2024 Q3', reported: 0.03, estimated: -0.06 },
    { quarter: '2024 Q4', reported: null, estimated: -1.73 },
    { quarter: '2025 Q1', reported: null, estimated: -0.77 },
    { quarter: '2025 Q2', reported: null, estimated: -0.62 },
    { quarter: '2025 Q3', reported: null, estimated: 0.06 }
];

const BarChartComponent = () => {
    return (
        <div style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={400} data={RevenueData} margin={{right: 30}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" stroke="white"/>
                    <YAxis stroke="white"/>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="reported" fill="#8884d8" name="Reported" />
                    <Bar dataKey="estimated" fill="#82ca9d" name="Estimated" />
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
                    Reported:
                    <span className="ml-2"> ${payload[0].value}</span>
                </p>
                <p className="text-medium text-xl">
                    Estimated:
                    <span className="ml-2"> ${payload[1]?.value}</span>
                </p>
            </div>
        );
    }
};
