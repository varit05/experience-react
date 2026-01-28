import { createBrowserRouter } from "react-router";

import { redirect } from "react-router";
import type { RouteObject } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import { lazyLoadHelper } from "./utils/lazyLoadHelper";
import { pathKeys } from "./shared/routes";
import Root from "./Root";

export const routes: RouteObject[] = [
  {
    lazy: lazyLoadHelper(() => import("./layout/MainLayout")),
    children: [
      {
        path: pathKeys.home,
        lazy: lazyLoadHelper(() => import("./pages/Home")),
        HydrateFallback: () => "Loading Home page",
        ErrorBoundary: () => (
          <ErrorBoundary fallback={<div>Error while fetching the data </div>} />
        ),
      },
      {
        path: pathKeys.about,
        lazy: lazyLoadHelper(() => import("./pages/About")),
        HydrateFallback: () => "Loading About page",
        ErrorBoundary: () => (
          <ErrorBoundary fallback={<div>Error while fetching the data </div>} />
        ),
      },
      {
        path: pathKeys.contact,
        lazy: lazyLoadHelper(() => import("./pages/Contact")),
        HydrateFallback: () => "Loading Contact page",
        ErrorBoundary: () => (
          <ErrorBoundary fallback={<div>Error while fetching the data </div>} />
        ),
      },
    ],
  },

  {
    path: "*",
    // This can be 404 later when when 404 page has been developed.
    loader: () => redirect(pathKeys.home),
  },
];

const routesConfiguration = [
  {
    component: <Root />,
    path: pathKeys.root,
    children: [...routes],
  },
];

// No need to export the same variable two different ways
const router = createBrowserRouter(routesConfiguration);

export default router;
