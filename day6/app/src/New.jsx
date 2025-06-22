import { useState } from "react";

function Home({ name }) {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>{name} Home</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <p>Clicked: {count} times</p>
        </div>
    );
}

export default Home;
