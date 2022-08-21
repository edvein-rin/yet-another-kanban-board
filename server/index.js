const express = require("express");
const path = require("path");

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, function () {
  console.error(
    `Node ${
      isDev ? "dev server" : "production server" + process.pid
    }: listening on port ${PORT}`
  );
});

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("*", function (_request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/api", function (_req, res) {
  res.set("Content-Type", "application/json");
  res.send('{"message":"Hello from the custom server!"}');
});
