import styles from "./FilterList.styled";
import { Box, ButtonBase, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Filter } from "types/dataTypes";
import { Image } from "./FilterList.styled";

interface IFilterListProps {
  list: Filter[];
  onOpen: (value: string) => void;
}

const FilterList: FC<IFilterListProps> = ({ list, onOpen }) => {
  return (
    <Box>
      <Grid
        container
        component="ul"
        spacing="15px"
      >
        {list.map(({ imgURL, name, filter }) => (
          <Grid
            component="li"
            key={imgURL}
            item
            xs={12}
            md={4}
          >
            <ButtonBase
              onClick={() => {
                onOpen(name);
              }}
              sx={styles.button}
            >
              <Image
                src={imgURL}
                alt={name}
              />

              <Box sx={styles.meta}>
                <Typography
                  component="h3"
                  variant="cardtitle"
                  sx={styles.name}
                >
                  {name}
                </Typography>
                <Typography
                  variant="body2"
                  color="rgba(244,244,244,0.4)"
                >
                  {filter}
                </Typography>
              </Box>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FilterList;
