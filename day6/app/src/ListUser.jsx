import { useEffect, useState } from "react";

function ListUser() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

 

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (userList.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <table style={{ border: "1px solid black", width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>S#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListUser;
