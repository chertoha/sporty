import { Box, SxProps, Typography, alpha, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: "40px 20px",
  color: theme.palette.text.secondary,

  [theme.breakpoints.up("md")]: {
    padding: "32px",
  },
}));

export const Meta = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "flex-start",
    columnGap: 32,
  },
}));

export const Image = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  height: "auto",
  borderRadius: 12,

  [theme.breakpoints.up("md")]: {
    width: "270px",
  },
}));

export const Heading = styled("h2")(({ theme }) => ({
  marginBottom: 0,
  marginTop: 20,
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: 1,

  [theme.breakpoints.up("md")]: {
    marginTop: 0,
    fontSize: "24px",
    lineHeight: 1.5,
  },
}));

export const List = styled("ul")(({ theme }) => ({
  marginTop: 20,
  display: "flex",
  flexWrap: "wrap",
  gap: 20,

  padding: "10px 0",
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: alpha(theme.palette.text.secondary, 0.2),

  [theme.breakpoints.up("md")]: {
    marginTop: 16,
    padding: "8px 0",
    gap: 16,
  },
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.secondary, 0.4),
  [theme.breakpoints.up("md")]: {},
}));

export const ItemValue = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {},

  "&:first-letter": {
    textTransform: "uppercase",
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.secondary, 0.6),
  marginTop: 20,

  [theme.breakpoints.up("md")]: { marginTop: 16 },
}));

export const ToolbarWrapper = styled(Typography)(({ theme }) => ({
  marginTop: 40,

  [theme.breakpoints.up("md")]: {
    marginTop: 64,
    display: "flex",
    justifyContent: "flex-end",
    columnGap: 7,
  },
}));

const stars: SxProps = {
  mt: { xs: 5, md: 4 },
  display: "flex",
  alignItems: "center",
};

const favorites: SxProps = { width: { xs: "100%", md: "auto" } };

const give: SxProps = {
  mt: { xs: 5, md: 0 },
  width: { xs: "100%", md: "auto" },
};

const styles = { stars, favorites, give };

export default styles;
