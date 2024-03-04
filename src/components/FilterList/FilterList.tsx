import {
  Box,
  Button,
  ButtonBase,
  // ImageList,
  // ImageListItem,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Filter } from "types/dataTypes";
import { styled } from "@mui/material/styles";

interface IFilterListProps {
  list: Filter[];
}

const Image = styled("img")(({ theme }) => ({
  width: 50,
  height: 50,
  // position: "absolute",
  // left: 0,
  // right: 0,
  // top: 0,
  // bottom: 0,
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  // color: theme.palette.common.white,

  [theme.breakpoints.up("md")]: {},

  [theme.breakpoints.up("xl")]: {},
}));

const FilterList: FC<IFilterListProps> = ({ list }) => {
  console.log(list);

  return (
    <Box>
      <Box component="ul">
        {list.map(({ imgURL, name, filter }) => (
          <Box
            component="li"
            key={imgURL}
          >
            <ButtonBase sx={{}}>
              <Image
                src={imgURL}
                alt={name}
              />
              <Typography component="h3">{name}</Typography>
              <Typography>{filter}</Typography>
            </ButtonBase>
          </Box>
        ))}
      </Box>

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
