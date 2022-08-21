import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { usePing } from "queries/usePing";

export const HomePage: FC = () => {
  const { data: message } = usePing();

  return (
    <Box>
      <Typography variant="h1">{message ?? "Loading..."}</Typography>
    </Box>
  );
};
