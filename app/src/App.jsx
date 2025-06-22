import { useState } from "react";
import Home from "./Home.jsx";
import ListUser from "./ListUser.jsx";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [userList, setUserList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      setUserList([...userList, user]);
      setUser({ name: "", email: "" }); // clear input
    }
  };
return (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0"
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
      }}
    >
      <Home name="Sree's" />

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={user.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={user.email}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <table style={{ border: "2px solid black", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Entries</th>
      
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}
export default App;