
import 'font-awesome/css/font-awesome.min.css';
import '../scssFiles/report.scss';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { MdOutlineArrowUpward } from 'react-icons/md';
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all necessary components of Chart.js  
Chart.register(...registerables);

const Report = () => {
    const barChartRef = useRef(null);
    const pieChartRef = useRef(null);

    useEffect(() => {
        let barChart;
        let pieChart;

        if (barChartRef.current) {
            const barCtx = barChartRef.current.getContext('2d');
            barChart = new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        {
                            label: 'Order',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: 'rgba(255, 206, 86, 0.8)',
                            borderColor: 'rgba(255, 206, 86, 2)',
                            borderWidth: 1
                        },
                        {
                            label: 'Sales',
                            data: [2, 3, 20, 5, 1, 4],
                            backgroundColor: '#5F6FFF',
                            borderColor: '#5F6FFF',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        if (pieChartRef.current) {
            const pieCtx = pieChartRef.current.getContext('2d');
            pieChart = new Chart(pieCtx, {
                type: 'pie',
                data: {
                    labels: ['Product 1', 'Product 2', 'Product 3'],
                    datasets: [{
                        data: [10, 20, 30],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 206, 86, 0.8)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            });
        }

        // Cleanup function to destroy charts on component unmount  
        return () => {
            if (barChart) {
                barChart.destroy();
            }
            if (pieChart) {
                pieChart.destroy();
            }
        };
    }, []);

    return (
        <>
            <div className="main-content" id="main-content">
                <div className="cards">
                    <div className="card">
                        <div className="number-container">
                            <FaHandHoldingDollar style={{ fontSize: '50px' }} />
                            <div className="number purple">
                                30,000
                            </div>
                            <div className="percentage">
                                <MdOutlineArrowUpward style={{ fontSize: '30px', opacity: '0.5', marginRight: '5px' }} />
                                12%
                            </div>
                        </div>
                        <div className="description">
                            Today's sales
                        </div>
                    </div>
                    <div className="card">
                        <div className="number-container">
                            <FaHandHoldingDollar style={{ fontSize: '50px' }} />

                            <div className="number blue">
                                270
                            </div>
                            <div className="percentage">
                                <MdOutlineArrowUpward style={{ fontSize: '30px', opacity: '0.5', marginRight: '5px' }} />

                                12%
                            </div>
                        </div>
                        <div className="description">
                            Today's total orders
                        </div>
                    </div>
                    <div className="card">
                        <div className="number-container">
                            <FaHandHoldingDollar style={{ fontSize: '50px' }} />

                            <div className="number red">
                                1,000
                            </div>
                            <div className="percentage">
                                <MdOutlineArrowUpward style={{ fontSize: '30px', opacity: '0.5', marginRight: '5px' }} />

                                12%
                            </div>
                        </div>
                        <div className="description">
                            Today's revenue
                        </div>
                    </div>
                    <div className="card">
                        <div className="number-container">
                            <FaHandHoldingDollar style={{ fontSize: '50px' }} />

                            <div className="number yellow">
                                100
                            </div>
                            <div className="percentage">
                                <MdOutlineArrowUpward style={{ fontSize: '30px', opacity: '0.5', marginRight: '5px' }} />

                                12%
                            </div>
                        </div>
                        <div className="description">
                            Today's customers
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="chart">
                        <h3>Today's data</h3>
                        <canvas ref={barChartRef} id="barChart"></canvas>
                    </div>
                    <div className="chart">
                        <h3>Top selling Products</h3>
                        <canvas ref={pieChartRef} id="pieChart"></canvas>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Report;