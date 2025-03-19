import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PtaReadApiLocal() {
    // Initialize state
    const [ptaListUser, setPtaListUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = "http://localhost:3001/users";

    // Fetch data from API
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setPtaListUser(response.data);
                setLoading(false); // Data fetched, stop loading
            })
            .catch((error) => {
                setError("Error fetching data from the API.");
                setLoading(false);
                console.log("Error:", error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Danh Sách Người Dùng</h2>
            
            {/* Display error message */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Display loading spinner */}
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ptaListUser.length > 0 ? (
                                ptaListUser.map((ptaItem) => (
                                    <tr key={ptaItem.id}> {/* Unique key for each row */}
                                        <td>{ptaItem.fullName}</td>
                                        <td>{ptaItem.age}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="text-center">No data available</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            )}
        </div>
    );
}
