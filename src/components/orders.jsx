import 'font-awesome/css/font-awesome.min.css';
import '../scssFiles/orders.scss'
import { FaCalendarAlt } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Adjust 

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>

            <div className="container mx-auto w-full max-w-none">
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
                                {currentItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.date}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.storeName}
                                        </td>
                                        <td>
                                            {item.location}
                                        </td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td className="status">
                                            <span className={item.status === 'Completed' ? 'completed' : 'pending'}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                <div>

                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">{Math.min(indexOfLastItem, data.length)}</span> of{' '}
                                        <span className="font-medium">{data.length}</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                                        <a
                                            href="#"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                                            disabled={currentPage === 1}
                                        >
                                            <span className="sr-only">Previous</span>
                                            <ChevronLeftIcon aria-hidden="true" className="size-5" />
                                        </a>
                                        {pageNumbers.map(number => (
                                            <a
                                                key={number}
                                                href="#"
                                                onClick={() => handlePageChange(number)}
                                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'}`}
                                            >
                                                {number}
                                            </a>
                                        ))}
                                        <a
                                            href="#"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${currentPage === pageNumbers.length ? 'cursor-not-allowed' : ''}`}
                                            disabled={currentPage === pageNumbers.length}
                                        >
                                            <span className="sr-only">Next</span>
                                            <ChevronRightIcon aria-hidden="true" className="size-5" />
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Orders

const data = [
    {
        id: "#7676",
        date: "06/30/2022",
        name: "Ramesh Chaudhary",
        storeName: "Store name",
        location: "Lalitpur",
        quantity: 3,
        status: "Completed",
    },
    {
        id: "#7677",
        date: "06/30/2022",
        name: "Ramesh Chaudhary",
        storeName: "Store name",
        location: "Lalitpur",
        quantity: 3,
        status: "Pending",
    },
    {
        id: "#7678",
        date: "06/30/2022",
        name: "Ramesh Chaudhary",
        storeName: "Store name",
        location: "Lalitpur",
        quantity: 3,
        status: "Completed",
    },
    {
        id: "#7679",
        date: "06/30/2022",
        name: "Ramesh Chaudhary",
        storeName: "Store name",
        location: "Lalitpur",
        quantity: 3,
        status: "Completed",
    },
    {
        id: "#7680",
        date: "06/30/2022",
        name: "Ramesh Chaudhary",
        storeName: "Store name",
        location: "Lalitpur",
        quantity: 3,
        status: "Completed",
    },
    {
        id: "#7681",
        date: "06/30/2022",
        name: "Ramesh Chaudhary",
        storeName: "Store name",
        location: "Lalitpur",
        quantity: 3,
        status: "Completed",
    },
    {
        id: "#7682",
        date: "06/30/2022",
        name: "Ramesh Chaudhary",
        storeName: "Store name",
        location: "Lalitpur",
        quantity: 3,
        status: "Pending",
    },
    {
        id: "#7683",
        date: "06/30/2022",
        name: "Ramesh Chaudhary",
        storeName: "Store name",
        location: "Lalitpur",
        quantity: 3,
        status: "Completed",
    },
    {
        id: "#7684",
        date: "06/30/2022",
        name: "Ramesh Chaudhary",
        storeName: "Store name",
        location: "Lalitpur",
        quantity: 3,
        status: "Completed",
    },
    {
        id: "#7685",
        date: "06/30/2022",
        name: "Ramesh Chaudhary",
        storeName: "Store name",
        location: "Lalitpur",
        quantity: 3,
        status: "Completed",
    }
];