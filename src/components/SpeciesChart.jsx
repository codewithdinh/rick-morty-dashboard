import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const COLORS = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d',
    '#a4de6c', '#d0ed57', '#ffc658', '#a96aff', '#64b5f6', '#4dd0e1'
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const SpeciesChart = ({ data }) => {
    // Limit the number of species displayed and group the rest into "Other"
    const visibleData = data.slice(0, 8);
    const otherValue = data.slice(8).reduce((sum, entry) => sum + entry.value, 0);
    const finalData = otherValue > 0 ? [...visibleData, { name: 'Other', value: otherValue }] : visibleData;

    return (
        <div>
            <h3>Species Distribution</h3>
            <p>This chart shows the distribution of different species among all characters.</p>
            <p className="highlight-text">Humans represent the largest species group, with Aliens being the second most common species in the Rick and Morty universe.</p>
            <PieChart width={600} height={300}>
                <Pie
                    data={finalData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={180}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        finalData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))
                    }
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}`, name]} />
                <Legend layout="vertical" align="left" verticalAlign="middle" />
            </PieChart>
        </div>
    );
};

export default SpeciesChart;