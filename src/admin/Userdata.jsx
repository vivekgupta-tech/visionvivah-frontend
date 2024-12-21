import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debugging line
        setUsers(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="pt-48 ml-10">
      <h1 className="text-3xl font-bold mb-6">User Submissions</h1>
      {users.length === 0 ? (
        <p>No users have submitted data yet.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {users.map((user, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h2 className="font-semibold text-xl">{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Mobile: {user.mobile}</p>
              <p>City: {user.city}</p>
              <p>Message: {user.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
