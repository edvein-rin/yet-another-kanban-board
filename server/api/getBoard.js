const getBoard = () => {
  const boardId = request.originalUrl.replace("/board/", "");
  // TODO validate boardId

  const board = {
    id: boardId,
  };

  response.json(board);
};

module.exports = {
  getBoard,
};
