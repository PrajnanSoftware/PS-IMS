import 'font-awesome/css/font-awesome.min.css';
import '../scssFiles/orders.scss';
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Stock = () => {
    const [activeCategory, setActiveCategory] = useState('Orders');
    const categories = ['Orders', 'Cat1', 'Cat2', 'Cat3'];

    const data = {
        Orders: [
            { id: '#7676', date: '06/30/2022', customer: 'Ramesh Chaudhary', channel: 'Store name', destination: 'Lalitpur', items: 3, status: 'Completed' },
        ],
        Cat1: [
            { id: '#1234', date: '07/15/2022', customer: 'John Doe', channel: 'Online', destination: 'Kathmandu', items: 5, status: 'Pending' },
        ],
        Cat2: [
            { id: '#5678', date: '08/10/2022', customer: 'Jane Smith', channel: 'Retail', destination: 'Pokhara', items: 2, status: 'Completed' },
        ],
        Cat3: [
            { id: '#9101', date: '09/05/2022', customer: 'Alice Johnson', channel: 'Wholesale', destination: 'Bhaktapur', items: 8, status: 'Pending' },
        ],
    };

    return (
        <>
            <div className="container">
                <div className="content" id="content">
                    <div className="orders-section">
                        <div className="categories">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="orders-header">
                            <h1>{activeCategory}</h1>
                            <div className="buttons">
                                <button className="new-order">
                                    + New Stock
                                </button>
                            </div>
                        </div>
                        <div className="filters">
                            <div>
                                <input
                                    placeholder={`Search ${activeCategory}`}
                                    type="text"
                                    style={{ fontFamily: 'Poppins', fontWeight: '100', fontSize: '15px' }}
                                />
                            </div>
                            <div>
                                <button style={{ marginRight: '10px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px' }}>
                                    <FaCalendarAlt />
                                </button>
                                <select style={{ marginRight: '10px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px' }}>
                                    <option>Status</option>
                                </select>
                            </div>
                        </div>
                        <table className="orders-table">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Customer</th>
                                    <th>Sales channel</th>
                                    <th>Destination</th>
                                    <th>Items</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data[activeCategory].map((item, index) => (
                                    <tr key={index}>
                                        <td><input type="checkbox" /></td>
                                        <td>{item.id}</td>
                                        <td>{item.date}</td>
                                        <td>{item.customer}</td>
                                        <td>{item.channel}</td>
                                        <td>{item.destination}</td>
                                        <td>{item.items}</td>
                                        <td className="status">
                                            <span className={item.status.toLowerCase()}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stock;
