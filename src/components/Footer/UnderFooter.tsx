import * as styles from "./UnderFooter.styled";
import { Box, Typography } from "@mui/material";

const UnderFooter = () => {
  return (
    <Box sx={styles.grid}>
      <Typography sx={styles.rights}>Your Energy. All rights reserved.</Typography>

      <Typography sx={styles.policy}> </Typography>

      <Typography sx={styles.copy}>©2024</Typography>
    </Box>
  );
};

export default UnderFooter;
