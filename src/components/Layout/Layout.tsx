import Header from "components/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
