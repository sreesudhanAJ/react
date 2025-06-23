import { useState } from "react";
import Home from "./Home.jsx";
import ListUser from "./ListUser.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

function App() {
  let [user, setUser] = useState({ name: "", email: "", work: "", priority: "" });
  let [userList, setUserList] = useState([]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
          flexDirection: "column",
          padding: "30px",
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
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            width: "90%",
            maxWidth: "600px",
          }}
        >
          <Home name="Tharunkumar" usernmae="Suresh5" />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setUserList([...userList, { ...user }]);
              setUser({ name: "", email: "", work: "", priority: "" });
            }}
            style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your E-mail"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="text"
              name="work"
              placeholder="Enter the Work"
              value={user.work}
              onChange={(e) => setUser({ ...user, work: e.target.value })}
            />
            <input
              type="text"
              name="priority"
              placeholder="Enter the Priority"
              value={user.priority}
              onChange={(e) => setUser({ ...user, priority: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>

          <table className="table" style={{ border: "2px solid black", width: "100%", marginTop: "20px" }}>
            <thead>
              <tr style={{ border: "1px solid black" }}>
                <th>Name</th>
                <th>E-mail</th>
                <th>Work</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((u, index) => (
                <tr key={index} style={{ border: "1px solid black" }}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.work}</td>
                  <td>{u.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <ListUser />
        </div>
      </div>

      {/* Routes outside the box */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
