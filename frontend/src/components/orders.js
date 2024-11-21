
import 'font-awesome/css/font-awesome.min.css';
import '../scssFiles/orders.scss'
import { FaCalendarAlt } from 'react-icons/fa';

const Orders = () => {
    return (
        <>
            <div className="container">
                <div className="content" id="content">
                    <div className="orders-section">
                        <div className="orders-header">
                            <h1>
                                Orders
                            </h1>
                            <div className="buttons">
                                <button>
                                    Export to excel
                                </button>
                                <button>
                                    Import Orders
                                </button>
                                <button className="new-order">
                                    + New Orders
                                </button>
                            </div>
                        </div>
                        <div className="filters" >
                            <div><input placeholder="Search order ID" type="text" style={{ fontFamily: 'Poppins', fontWeight: '100', fontSize: '15px' }} /></div>
                            <div >
                                <button style={{ marginRight: '10px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px' }}>
                                    <FaCalendarAlt />
                                </button>
                                <select style={{ marginRight: '10px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px' }}>
                                    <option>
                                        Sales
                                    </option>
                                </select>
                                <select style={{ marginRight: '10px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px' }}>
                                    <option>
                                        Status
                                    </option>
                                </select>
                                <select style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '15px' }}>
                                    <option>
                                        Filter
                                    </option>
                                </select></div>


                        </div>
                        <table className="orders-table">
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th>
                                        order ID
                                    </th>
                                    <th>
                                        Date
                                    </th>
                                    <th>
                                        Customer
                                    </th>
                                    <th>
                                        Sales channel
                                    </th>
                                    <th>
                                        Destination
                                    </th>
                                    <th>
                                        Items
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        #7676
                                    </td>
                                    <td>
                                        06/30/2022
                                    </td>
                                    <td>
                                        Ramesh Chaudhary
                                    </td>
                                    <td>
                                        Store name
                                    </td>
                                    <td>
                                        Lalitpur
                                    </td>
                                    <td>
                                        3
                                    </td>
                                    <td className="status">
                                        <span className="completed">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        #7676
                                    </td>
                                    <td>
                                        06/30/2022
                                    </td>
                                    <td>
                                        Ramesh Chaudhary
                                    </td>
                                    <td>
                                        Store name
                                    </td>
                                    <td>
                                        Lalitpur
                                    </td>
                                    <td>
                                        3
                                    </td>
                                    <td className="status">
                                        <span className="pending">
                                            Pending
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        #7676
                                    </td>
                                    <td>
                                        06/30/2022
                                    </td>
                                    <td>
                                        Ramesh Chaudhary
                                    </td>
                                    <td>
                                        Store name
                                    </td>
                                    <td>
                                        Lalitpur
                                    </td>
                                    <td>
                                        3
                                    </td>
                                    <td className="status">
                                        <span className="completed">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        #7676
                                    </td>
                                    <td>
                                        06/30/2022
                                    </td>
                                    <td>
                                        Ramesh Chaudhary
                                    </td>
                                    <td>
                                        Store name
                                    </td>
                                    <td>
                                        Lalitpur
                                    </td>
                                    <td>
                                        3
                                    </td>
                                    <td className="status">
                                        <span className="completed">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        #7676
                                    </td>
                                    <td>
                                        06/30/2022
                                    </td>
                                    <td>
                                        Ramesh Chaudhary
                                    </td>
                                    <td>
                                        Store name
                                    </td>
                                    <td>
                                        Lalitpur
                                    </td>
                                    <td>
                                        3
                                    </td>
                                    <td className="status">
                                        <span className="completed">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div></>
    )
}

export default Orders