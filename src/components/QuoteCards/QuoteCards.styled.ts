import { Box, SxProps, Theme, alpha, styled } from "@mui/material";

export const QuoteWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== "isFavorites",
})<{ isFavorites?: boolean }>(({ theme, isFavorites }) => ({
  position: "relative",
  backgroundColor: theme.palette.bg?.dark,
  color: theme.palette.text.secondary,
  borderRadius: "20px",

  [theme.breakpoints.up("xs")]: {
    padding: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "209px",
    ...(isFavorites && { height: "auto" }),
  },
  [theme.breakpoints.up("md")]: {
    padding: "40px",
    height: "249px",
    ...(isFavorites && { height: "auto" }),
  },
  [theme.breakpoints.up("xl")]: {
    height: "242px",
    ...(isFavorites && { height: "auto" }),
  },
}));

export const ImageCardWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== "isFavorites",
})<{ isFavorites?: boolean }>(({ theme, isFavorites }) => ({
  width: "100%",
  borderRadius: "20px",
  overflow: "hidden",

  [theme.breakpoints.up("xs")]: {
    height: isFavorites ? "119px" : "242px",
  },
  [theme.breakpoints.up("md")]: {
    height: isFavorites ? "141px" : "249px",
  },
  [theme.breakpoints.up("xl")]: {
    height: isFavorites ? "141px" : "242px",
  },
}));

export const AdviceCardWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== "isFavorites",
})<{ isFavorites?: boolean }>(({ theme, isFavorites }) => ({
  position: "relative",
  backgroundColor: theme.palette.bg?.light,
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  width: "100%",

  [theme.breakpoints.up("xs")]: {
    padding: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    height: isFavorites ? "119px" : "209px",
  },
  [theme.breakpoints.up("md")]: {
    padding: isFavorites ? "25px" : "40px",
    height: isFavorites ? "141px" : "249px",
  },
  [theme.breakpoints.up("xl")]: {
    height: isFavorites ? "141px" : "315px",
  },
}));

export const AdviceCardIconWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== "isFavorites",
})<{ isFavorites?: boolean }>(({ theme, isFavorites }) => ({
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: isFavorites ? "20px" : "32px",
  height: isFavorites ? "20px" : "32px",
  borderRadius: "50%",
  backgroundColor: theme.palette.bg?.dark,

  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const quote: SxProps = {
  position: "absolute",
  right: { xs: "20px", md: "40px" },
  top: { xs: "20px", md: "40px" },
  display: { xs: "none", sm: "block" },
  width: { sm: "20px", md: "24px" },
};

const icon: SxProps<Theme> = theme => ({
  display: { xs: "none", sm: "flex" },
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: alpha(theme.palette.text.secondary, 0.2),
});

const title: SxProps = {
  fontSize: { xs: 20, md: 24 },
  lineHeight: { xs: 1, md: 1.5 },
};

const text: SxProps<Theme> = theme => ({
  mt: { xs: "8px", md: "6px" },
  color: alpha(theme.palette.text.secondary, 0.6),
});

const author: SxProps = {
  fontSize: { md: 16 },
  lineHeight: { md: 1.5 },
  mt: { xs: "16px", md: "18px" },
};

const adviceText: SxProps = {
  color: "text.primary",
  mt: { xs: "16px", md: "20px" },
  textOverflow: {
    xl: "unset",
  },

  overflow: { xl: "unset" },
};

const styles = { quote, icon, title, text, author, adviceText };

export default styles;
