import Chip from "@mui/material/Chip";
import styles from "./Tag.styled";
import { FC } from "react";

interface ITagProps {
  label: string;
}

const Tag: FC<ITagProps> = ({ label }) => {
  return (
    <Chip
      label={label}
      variant="outlined"
      sx={styles.chip}
    />
  );
};

export default Tag;
