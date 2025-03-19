import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Use navigate for redirection
import axios from 'axios';

export default function PtaEditUser() {
  const { id } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null); // To store user data
  const navigate = useNavigate(); // To navigate after saving

  // Fetch user data by ID
  useEffect(() => {
    axios
      .get(`https://67da84ca35c87309f52ce0a0.mockapi.io/K23cnt3_PhamTuanAnh/pta_users/${id}`)
      .then((response) => {
        setUser(response.data); // Store user data in state
      })
      .catch((error) => {
        console.error("Error fetching user data!", error); // Handle error
      });
  }, [id]);

  // Handle form submit to update user
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Send updated user data to API
    axios
      .put(`https://67da84ca35c87309f52ce0a0.mockapi.io/K23cnt3_PhamTuanAnh/pta_users/${id}`, user)
      .then(() => {
        // On success, navigate back to user list
        navigate('/list-user');
      })
      .catch((error) => {
        console.error("Error saving changes", error); // Handle error
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-white">Edit User</h2>
      {user ? (
        <form onSubmit={handleSubmit} className="p-5 border rounded-3 shadow-lg bg-dark text-white">
          <div className="mb-3">
            <label htmlFor="pta_name" className="form-label">Name</label>
            <input
              type="text"
              id="pta_name"
              className="form-control bg-secondary text-white"
              value={user.pta_name}
              onChange={(e) => setUser({ ...user, pta_name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pta_email" className="form-label">Email</label>
            <input
              type="email"
              id="pta_email"
              className="form-control bg-secondary text-white"
              value={user.pta_email}
              onChange={(e) => setUser({ ...user, pta_email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pta_phone" className="form-label">Phone</label>
            <input
              type="text"
              id="pta_phone"
              className="form-control bg-secondary text-white"
              value={user.pta_phone}
              onChange={(e) => setUser({ ...user, pta_phone: e.target.value })}
            />
          </div>

          {/* Radio buttons for Active */}
          <div className="mb-3">
            <label className="form-label">Active</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="pta_active"
                id="pta_active_hd"
                value="true"
                checked={user.pta_active === true}
                onChange={() => setUser({ ...user, pta_active: true })}
              />
              <label className="form-check-label" htmlFor="pta_active_hd">
                Active
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="pta_active"
                id="pta_active_kh"
                value="false"
                checked={user.pta_active === false}
                onChange={() => setUser({ ...user, pta_active: false })}
              />
              <label className="form-check-label" htmlFor="pta_active_kh">
                Inactive
              </label>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success btn-lg">Save Changes</button>
          </div>
        </form>
      ) : (
        <p className="text-white">Loading user data...</p>
      )}

      {/* Back button */}
      <div className="d-flex justify-content-center mt-4">
        <button onClick={() => navigate('/list-user')} className="btn btn-outline-light">
          Back to List
        </button>
      </div>
    </div>
  );
}
