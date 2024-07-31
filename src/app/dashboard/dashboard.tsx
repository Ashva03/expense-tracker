"use client"
import React from 'react'
import { ChartMain, ChartSub, DashboardMain } from './style'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        income: [5000, 4000, 6000, 7000, 8000],
        expense: [2000, 3000, 2500, 2800, 3200],
    };

    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Income',
                data: data.income,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Expense',
                data: data.expense,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    return (
        <DashboardMain>
            <ChartMain>
                <ChartSub>
                    <Bar data={chartData} />
                </ChartSub>
            </ChartMain>
        </DashboardMain>
    )
}

export default Dashboard
