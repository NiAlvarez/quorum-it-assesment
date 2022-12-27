import React from 'react'
import RecentNews from './pages/RecentNews'
import { QueryClientProvider, QueryClient } from 'react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TopRated from './pages/TopRated';
import { ReactQueryDevtools } from 'react-query/devtools'
import Article from './components/article/Article';
import Categories from './pages/Categories';
import NotFound from './pages/404';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecentNews />,
    errorElement: <NotFound />,
  },
  {
    path: "/rated",
    element: <TopRated />,
  },
  {
    path: "article/:articleId",
    element: <Article />,
  },
  {
    path: ":category",
    element: <Categories />,
  },
]);

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </div>
  )
}

export default App