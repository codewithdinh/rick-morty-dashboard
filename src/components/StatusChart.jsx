import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const StatusChart = ({ data }) => {
    return (
        <div>
            <h3>Status Distribution</h3>
            <p>This chart shows the distribution of character statuses (Alive, Dead, Unknown).</p>
            <p className="highlight-text">Most characters are still alive, with some having met an unfortunate demise. A significant number have unknown status.</p>
            <BarChart width={500} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default StatusChart;