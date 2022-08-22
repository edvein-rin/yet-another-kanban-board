import { useState } from "react";

import { KanbanBoard } from "types";

export const useKanbanBoard = (boardId: KanbanBoard["id"]) => {
  const [board, setBoard] = useState<KanbanBoard | undefined>(undefined);

  const 

  return board;
};
