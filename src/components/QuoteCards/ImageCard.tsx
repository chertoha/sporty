import { Box } from "@mui/material";

const ImageCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "20px",
        height: { sx: "242px", md: "249px", xl: "242px" },
        overflow: "hidden",
      }}
    >
      <Box component="picture">
        <source
          media="(max-width: 767.98px)"
          srcSet={`${process.env.PUBLIC_URL}/quote/quote-1-mob@1x.jpg 1x, ${process.env.PUBLIC_URL}/quote/quote-1-mob@2x.jpg 2x`}
          type="image/jpeg"
        />

        <source
          media="(max-width: 1439.98px)"
          srcSet={`${process.env.PUBLIC_URL}/quote/quote-1-tab@1x.jpg 1x, ${process.env.PUBLIC_URL}/quote/quote-1-tab@2x.jpg 2x`}
          type="image/jpeg"
        />

        <source
          media="(min-width: 1440px)"
          srcSet={`${process.env.PUBLIC_URL}/quote/quote-1-desk@1x.jpg 1x, ${process.env.PUBLIC_URL}/quote/quote-1-desk@2x.jpg 2x`}
          type="image/jpeg"
        />

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
    </Box>
  );
};

export default ImageCard;
