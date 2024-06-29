import styles from "./Loader.styled";

import { Box } from "@mui/material";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <Box sx={styles.loader}>
      <FadeLoader
        width={5}
        color="#242424"
      />
    </Box>
  );
};

export default Loader;
