import { FC, useEffect, useState } from "react";
import { Box, Card, IconButton, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

export interface KanbanBoardCardProps {
  title: string;
  onEdit: (title: string) => void;
  onSave: (title: string) => void;
}

export const KanbanBoardCard: FC<KanbanBoardCardProps> = ({
  title,
  onEdit,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState(title);
  const [isEditIconVisible, setIsEditIconVisible] = useState(false);

  const toggleEditing = () => setIsEditing((isEditingOld) => !isEditingOld);

  const onCardMouseOver = () => {
    setIsEditIconVisible(true);
  };
  const onCardMouseLeave = () => {
    setIsEditIconVisible(false);
  };

  const onSaveIconClick = () => {
    toggleEditing();
    onSave(titleInputValue);
  };
  const onEditIconClick = () => {
    toggleEditing();
    onEdit(titleInputValue);
  };

  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInputValue(e.target.value);
    onEdit(e.target.value);
  };

  return (
    <Card
      sx={{ p: 1, position: "relative" }}
      onMouseOver={onCardMouseOver}
      onMouseLeave={onCardMouseLeave}
    >
      {isEditing ? (
        <TextField
          variant="standard"
          multiline
          value={titleInputValue}
          onChange={handleTitleInputChange}
        />
      ) : (
        <Typography p="3px 0 5px">{title}</Typography>
      )}
      <Box
        sx={{
          position: "absolute",
          right: 3,
          top: 3,
        }}
      >
        {isEditing ? (
          <IconButton size="small" onClick={onSaveIconClick}>
            <SaveIcon />
          </IconButton>
        ) : (
          isEditIconVisible && (
            <IconButton size="small" onClick={onEditIconClick}>
              <EditIcon />
            </IconButton>
          )
        )}
      </Box>
    </Card>
  );
};
