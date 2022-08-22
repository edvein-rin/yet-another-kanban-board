import { useState } from "react";

import { KanbanBoardCard } from "types";

export const useKanbanBoardCards = (cardIds: KanbanBoardCard["id"][]) => {
  const [cards, setCards] = useState<KanbanBoardCard[] | undefined>(undefined);

  const updateKanbanBoardCards = async (
    cards: Pick<KanbanBoardCard, "id"> & Partial<Omit<KanbanBoardCard, "id">>[]
  ) => {
    // TODO
  };

  return cards;
};
