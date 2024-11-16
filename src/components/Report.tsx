import 'font-awesome/css/font-awesome.min.css';
import '../scssFiles/report.scss'
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { MdOutlineArrowUpward } from 'react-icons/md';
const Report = () => {
    return (
        <>
            <div className="main-content" id="main-content" >
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
                        <h3>
                            Todays data
                        </h3>
                        <canvas id="barChart">
                        </canvas>
                    </div>
                    <div className="chart">
                        <h3>
                            Top selling Products
                        </h3>
                        <canvas id="pieChart">
                        </canvas>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report