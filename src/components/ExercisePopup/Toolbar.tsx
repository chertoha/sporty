import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styles, { ToolbarWrapper } from "./ExercisePopup.styled";

import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { ReactComponent as TrashIcon } from "assets/images/icons/trash.svg";
import { Exercise } from "types/dataTypes";
import { selectFavorites } from "../../redux/favorites/selectors";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";

interface IToolbarProps {
  exersise: Exercise;
  openRatingPopup: () => void;
}

const Toolbar: FC<IToolbarProps> = ({ exersise, openRatingPopup }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState<boolean>(() =>
    favorites.some(({ _id }) => exersise._id === _id)
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(exersise._id));
    } else {
      dispatch(addFavorite(exersise));
    }

    setIsFavorite(prevState => !prevState);
  };

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
