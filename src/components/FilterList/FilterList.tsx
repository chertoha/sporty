import {
  Box,
  ButtonBase,
  Grid,
  // ImageList,
  // ImageListItem,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Filter } from "types/dataTypes";
import { styled } from "@mui/material/styles";

interface IFilterListProps {
  list: Filter[];
  onOpen: (value: string) => void;
}

// const List = styled("ul")(theme => ({

//   [theme.breakpoints.up("md")]: {},

//   [theme.breakpoints.up("xl")]: {},
// }));

const FilterList: FC<IFilterListProps> = ({ list, onOpen }) => {
  const Image = styled("img")(({ theme }) => ({
    // width: 50,
    // height: 50,

    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("xl")]: {},
  }));

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
              sx={{
                position: "relative",
                borderRadius: 6,
                overflow: "hidden",
                width: "100%",
                height: {
                  xs: 225,
                  xl: 242,
                },
                "&::after": {
                  position: "absolute",
                  content: `''`,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: "rgba(17,17,17,0.5)",
                },
              }}
            >
              <Image
                src={imgURL}
                alt={name}
              />

              <Box
                sx={{
                  color: "text.secondary",
                  position: "absolute",
                  zIndex: "2",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Typography
                  component="h3"
                  variant="cardtitle"
                  sx={{
                    ":first-letter": {
                      textTransform: "uppercase",
                    },
                  }}
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

      {/* <ImageList
        sx={{}}
        cols={3}
        rowHeight={164}
      >
        {list.map(({ name, imgURL, filter }) => (
          <ImageListItem key={imgURL}>
            <img
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={imgURL}
              alt={name}
              loading="lazy"
            />
            <h3>{name}</h3>
            <p>{filter}</p>
          </ImageListItem>
        ))}
      </ImageList> */}
    </Box>
  );
};

export default FilterList;
