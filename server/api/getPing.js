const getPing = (_request, response) => {
  response.send("pong");
};

module.exports = {
  getPing,
};
