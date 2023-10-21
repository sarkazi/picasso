import { useCallback, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "../routeConfig";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route) => {
    const element = <Suspense fallback="">{route.element}</Suspense>;

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
