import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router";

import { logError } from "../shared/ui/ErrorHandler";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div>
      <ErrorBoundary
        fallback={"error with Link"}
        onError={(error: unknown) =>
          logError(error as Error, { componentStack: "MainLayout" })
        }
      >
        <Nav />
      </ErrorBoundary>
      <Outlet />
    </div>
  );
};

export default MainLayout;
