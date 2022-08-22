import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import { KanbanBoardColumn } from "types";
import { useKanbanBoardColumns } from "api/useKanbanBoardColumns";
import { KanbanBoardColumn as KanbanBoardColumnComp } from "components/ui/KanbanBoardColumn";

export interface KanbanBoardProps {
  name: string;
  columnIds: KanbanBoardColumn["id"][];
}

export const KanbanBoard: FC<KanbanBoardProps> = ({ name, columnIds }) => {
  const columns: KanbanBoardColumn[] | undefined =
    useKanbanBoardColumns(columnIds);
  const isLoadingColumns = columns === undefined;

  return (
    <Stack spacing={4}>
      <Typography variant="h3">{name}</Typography>
      {/* TODO filters */}
      {isLoadingColumns ? (
        <Typography>Loading columns...</Typography>
      ) : (
        <Stack direction="row" spacing={4}>
          {columns.map(({ id, name, cardIds }) => (
            <KanbanBoardColumnComp key={id} name={name} cardIds={cardIds} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};
