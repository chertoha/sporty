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
      //   sx={{ px: 8 }}
    />
  );
};

export default Tag;
