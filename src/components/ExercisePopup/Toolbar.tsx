import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styles, { ToolbarWrapper } from "./ExercisePopup.styled";

import { Button } from "@mui/material";
import { ReactComponent as TrashIcon } from "assets/images/icons/trash.svg";
import { FC, useState } from "react";

interface IToolbarProps {
  openRatingPopup: () => void;
}

const Toolbar: FC<IToolbarProps> = ({ openRatingPopup }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const toggleFavorite = () => setIsFavorite(prevState => !prevState);

  return (
    <ToolbarWrapper>
      <Button
        sx={styles.favorites}
        onClick={toggleFavorite}
        variant="contained"
        endIcon={isFavorite ? <TrashIcon /> : <FavoriteBorderOutlinedIcon />}
      >
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </Button>

      <Button
        sx={styles.give}
        variant="outlined"
        onClick={openRatingPopup}
      >
        Give a rating
      </Button>
    </ToolbarWrapper>
  );
};

export default Toolbar;
