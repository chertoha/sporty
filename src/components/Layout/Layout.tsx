import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>Header</header>
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
