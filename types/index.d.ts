export interface KanbanBoard {
  id: string;
  name: string;
  columnIds: KanbanBoardColumn["id"][];
}

export interface KanbanBoardColumn {
  id: string;
  name: string;
  cardIds: KanbanBoardCard["id"][];
}

export interface KanbanBoardCard {
  id: string;
  title: string;
  isBeingEdited: boolean;
}
