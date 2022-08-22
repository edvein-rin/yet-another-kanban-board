import { useState } from "react";

import { KanbanBoardColumn } from "types";

export const useKanbanBoardColumns = (columnIds: KanbanBoardColumn["id"][]) => {
  const [columns, setColumns] = useState<KanbanBoardColumn[] | undefined>(
    undefined
  );

  return columns;
};
