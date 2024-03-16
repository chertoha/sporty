import Chip from "@mui/material/Chip";
import { FC } from "react";

interface ITagProps {
  //...
}

const Tag: FC<ITagProps> = () => {
  return (
    <Chip
      label="#Sport"
      variant="outlined"
      sx={{
        height: "auto",
        px: 8,
        fontSize: "16px",
        lineHeight: 1.5,
        py: "3px",
      }}
    />
  );
};

export default Tag;
