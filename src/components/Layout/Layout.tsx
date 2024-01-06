import { Box } from "@mui/material";
import Footer from "components/Footer";
import Header from "components/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
