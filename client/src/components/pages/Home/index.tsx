import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { KanbanBoard as KanbanBoardComp } from "components/ui/KanbanBoard";
import { useKanbanBoard } from "api/useKanbanBoard";

export const HomePage: FC = () => {
  const boardId = "test-board";
  const board = useKanbanBoard(boardId);
  const isBoardLoading = board === undefined;

  return (
    <Box p={4}>
      {isBoardLoading ? (
        <Typography>Board {boardId} is loading...</Typography>
      ) : (
        <KanbanBoardComp name={board.name} columnIds={board.columnIds} />
      )}
    </Box>
  );
};
