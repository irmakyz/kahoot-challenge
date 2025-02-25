import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import { Loader } from "./components";
import { ROUTES } from "./Routes.ts";

const Home = lazy(() => import("./pages/Home/Home.tsx"));
const Details = lazy(() => import("./pages/Details/Details.tsx"));

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename='/kahoot-challenge'>
        <div className='app'>
          <main>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.DETAILS} element={<Details />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
