const express = require("express");
const { Server } = require("ws");
const morgan = require("morgan");
const path = require("path");

const { getPing } = require("./api/getPing");
const { getBoard } = require("./api/getBoard");

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan("dev"));

app.listen(PORT, function () {
  console.error(
    `Node ${
      isDev ? "dev server" : "production server" + process.pid
    }: listening on port ${PORT}`
  );
});

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/ping", getPing);
app.get("/board/*", getBoard);

app.get("*", function (_request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const webSocketsServer = new Server({ server: app });
webSocketsServer.on("connection", (webSocket, request) => {
  const ip = request.socket.remoteAddress;
  console.log(`Client ${ip} connected`);

  webSocket.on("message", (data) => console.log(`Message: ${data}`));

  webSocket.on("close", () => console.log("Client disconnected"));
});
