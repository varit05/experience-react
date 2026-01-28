import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router";
import { logError } from "./shared/ui/ErrorHandler";
import Nav from "./components/Nav";

export const Root = () => {
  return (
    <>
      <ErrorBoundary
        fallback={"error with Link"}
        onError={(error: unknown) =>
          logError(error as Error, { componentStack: "App" })
        }
      >
        <Nav />
      </ErrorBoundary>
      <Outlet />
    </>
  );
};

export default Root;
