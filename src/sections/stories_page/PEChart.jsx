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
const PEData = [
    { year: 2006, ratio: 120 },
    { year: 2007, ratio: 50.2 },
    { year: 2008, ratio: 226 },
    { year: 2009, ratio: 135 },
    { year: 2010, ratio: 24.6 },
    { year: 2011, ratio: 19.9 },
    { year: 2012, ratio: 29.7 },
    { year: 2013, ratio: 35.8 },
    { year: 2014, ratio: 27.1 },
    { year: 2015, ratio: 23.8 },
    { year: 2016, ratio: 38.0 },
    { year: 2017, ratio: 41.2 },
    { year: 2018, ratio: 26.3 },
    { year: 2019, ratio: 16.7 },
    { year: 2020, ratio: 15.3 },
    { year: 2021, ratio: 61.0 },
    { year: 2022, ratio: -4.58 }
];

const LineChartComponent = () => {
    return (
        <div style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={600} height={600} data={PEData} margin={{ right: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" stroke="white" />
                    <YAxis stroke="white" label={{ value: 'Ratio', angle: -90, position: 'insideLeft' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="ratio" stroke="#eb4034" />
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
                    Ratio: <span className="ml-2">{payload[0].value}%</span>
                </p>
            </div>
        );
    }
};
