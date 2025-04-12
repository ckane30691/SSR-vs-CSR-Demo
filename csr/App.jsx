import React, { useEffect, useState } from "react";
import { fetchUser } from "../shared/mockApi";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(fetchUser());
    }, []);

    if (!user) return <p>Loading...</p>;

    return <h1>Welcome, {user.name} (Client-Side Rendered)</h1>;
};

export default App;