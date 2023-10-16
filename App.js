const heading = React.createElement(
  "h1",
  { id: "heading", style: { fontSize: "2rem" }, key: "heading" },
  "Hello world from React"
);

// create nested div
const parent = React.createElement(
  "div",
  { id: "parent", key: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I am a H1 Tag"),
    React.createElement("h2", { key: "h2" }, "I am a H2 Tag"),
  ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([parent, heading]);
