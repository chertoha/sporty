import ExerciseCard from "components/UIKit/ExerciseCard";
import styles from "./FavoriteCardList.styled";

import { FC } from "react";
import { List, ListItem } from "@mui/material";
import { useWindowSize } from "hooks/useWindowSize";
import { Exercise } from "types/dataTypes";

interface IFavoriteCardListProps {
  list: Exercise[];
}

const FavoriteCardList: FC<IFavoriteCardListProps> = ({ list }) => {
  const viewport = useWindowSize();

  return (
    <List sx={styles.list}>
      {list.map(exercise => (
        <ListItem
          key={exercise._id}
          sx={styles.item}
        >
          <ExerciseCard
            viewport={viewport}
            exercise={exercise}
            type="favorite"
          />
        </ListItem>
      ))}
    </List>
  );
};

export default FavoriteCardList;
