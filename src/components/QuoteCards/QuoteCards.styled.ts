import { SxProps, Theme, alpha } from "@mui/material";

const quoteWrapper: SxProps = {
  position: "relative",
  padding: { xs: "20px", md: "40px" },
  backgroundColor: "bg.dark",
  color: "text.secondary",
  borderRadius: "20px",
  height: {
    sm: "209px",
    md: "249px",
    xl: "242px",
  },
};

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

const styles = { quoteWrapper, quote, icon, title, text, author };

export default styles;
