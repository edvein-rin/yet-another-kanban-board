import { FC } from "react";
import { Card, Stack, Typography } from "@mui/material";

import { KanbanBoardCard } from "types";
import { useKanbanBoardCards } from "api/useKanbanBoardCards";
import { KanbanBoardCard as KanbanBoardCardComp } from "components/ui/KanbanBoardCard";

export interface KanbanBoardColumnProps {
  name: string;
  cardIds: KanbanBoardCard["id"][];
}

export const KanbanBoardColumn: FC<KanbanBoardColumnProps> = ({
  name,
  cardIds,
}) => {
  const cards: KanbanBoardCard[] | undefined = useKanbanBoardCards(cardIds);
  const isLoadingCards = cards === undefined;

  return (
    <Card sx={{ width: 272, p: 2 }}>
      <Typography ml={1} mb={2} fontWeight="500">
        {name}
      </Typography>
      {isLoadingCards ? (
        <Typography>Loading cards...</Typography>
      ) : (
        <Stack spacing={2}>
          {cards.map(({ id, title }) => {
            const handleEdit = (value: string) => {
              console.log(
                `User trying to edit card "${id}":\n${title} -> ${value}`
              ); // TODO
            };
            const handleSave = (value: string) => {
              console.log(
                `User trying to save card "${id}":\n${title} -> ${value}`
              ); // TODO
            };

            return (
              <KanbanBoardCardComp
                key={id}
                title={title}
                onEdit={handleEdit}
                onSave={handleSave}
              />
            );
          })}
        </Stack>
      )}
    </Card>
  );
};
