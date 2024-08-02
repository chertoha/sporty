import sources from "utils/quoteImageSources";

import { FC } from "react";
import { Box } from "@mui/material";
import { ImageCardWrapper } from "./QuoteCards.styled";

interface IImageCardProps {
  isFavorites?: boolean;
}

const ImageCard: FC<IImageCardProps> = ({ isFavorites = false }) => {
  return (
    <ImageCardWrapper isFavorites={isFavorites}>
      <Box component="picture">
        {sources.map(({ media, srcSet }) => (
          <source
            key={media}
            media={media}
            srcSet={`${process.env.PUBLIC_URL}${srcSet(isFavorites)._1x} 1x, ${process.env.PUBLIC_URL}${srcSet(isFavorites)._2x} 2x`}
            type="image/jpeg"
          />
        ))}

        <Box
          component="img"
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={`${process.env.PUBLIC_URL}/quote/quote-1-mob@1x.jpg`}
          alt="Fitness communication"
          width="444"
          height="242"
          loading="lazy"
        ></Box>
      </Box>
    </ImageCardWrapper>
  );
};

export default ImageCard;
