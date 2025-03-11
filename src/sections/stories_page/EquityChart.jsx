'use client';

import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

// Financial data
const financialData = [
    { year: '2009', netIncome: 0.00, equity: 0.13, roe: 2.42 },
    { year: '2010', netIncome: 0.03, equity: 0.16, roe: 15.95 },
    { year: '2011', netIncome: 0.04, equity: 0.24, roe: 18.45 },
    { year: '2012', netIncome: 0.02, equity: 0.28, roe: 6.40 },
    { year: '2013', netIncome: 0.03, equity: 0.33, roe: 8.64 },
    { year: '2014', netIncome: 0.04, equity: 0.39, roe: 10.31 },
    { year: '2015', netIncome: 0.04, equity: 0.42, roe: 10.87 },
    { year: '2016', netIncome: 0.04, equity: 0.41, roe: 10.50 },
    { year: '2017', netIncome: 0.06, equity: 0.47, roe: 14.65 },
    { year: '2018', netIncome: 0.06, equity: 0.50, roe: 17.45 },
    { year: '2019', netIncome: 0.09, equity: 0.65, roe: 14.23 },
    { year: '2020', netIncome: 0.15, equity: 0.80, roe: 20.38 },
    { year: '2021', netIncome: 0.17, equity: 0.82, roe: 22.25 },
    { year: '2022', netIncome: -0.29, equity: 0.48, roe: -47.30 },
    { year: '2023', netIncome: -0.37, equity: 0.33, roe: -85.10 },
    { year: '2024', netIncome: -0.13, equity: 0.15, roe: -75.54 }
];

const BarChartComponent = () => {
    return (
        <div>
            <div style={{ height: '400px', marginBottom: '70px' }}>
                <h3>TTM Net Income</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={financialData} margin={{ right: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" stroke="white" />
                        <YAxis stroke="white" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="netIncome" fill="#8884d8" name="Net Income" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div style={{ height: '400px', marginBottom: '70px'}}>
                <h3>Shareholder's Equity</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={financialData} margin={{ right: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" stroke="white" />
                        <YAxis stroke="white" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="equity" fill="#82ca9d" name="Equity" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div style={{ height: '400px'}}>
                <h3>Return on Equity</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={financialData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" stroke="white" />
                        <YAxis stroke="white" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="roe" stroke="#ff7300" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartComponent;

