import React from "react";

const App = ({ user }) => {
    if (!user) return <div>Loading...</div>
    return <h1>Welcome, {user.name} (Server-Side Rendered)</h1>;
};

export default App;