import Chip from "@mui/material/Chip";
import { FC } from "react";

interface ITagProps {
  label: string;
}

const Tag: FC<ITagProps> = ({ label }) => {
  return (
    <Chip
      label={label}
      variant="outlined"
      sx={{
        height: "auto",
        fontSize: {
          xs: "14px",
          md: "16px",
        },
        lineHeight: 1.5,
        py: "3px",
        px: { xs: 6, md: 8 },
      }}
    />
  );
};

export default Tag;