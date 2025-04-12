require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"],
});

const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require("./App").default;
const { renderHtml } = require("./views/template");
const { fetchUser } = require("../shared/mockApi");

const app = express();
app.use(express.static("ssr/public"));

app.get("/", (req, res) => {
    const user = fetchUser();
    const reactHtml = renderToString(React.createElement(App, { user }));
    const html = renderHtml(reactHtml, user);
    res.send(html);
});

app.listen(3001, () => console.log("SSR App at http://localhost:3001"));