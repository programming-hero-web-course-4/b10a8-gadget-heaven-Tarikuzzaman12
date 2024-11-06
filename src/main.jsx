import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Products from './components/Products';
import { Outlet } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Statictics from './pages/Statictics';
import AnnouncementBanner from './pages/AnnouncementBanner';
import { HelmetProvider } from 'react-helmet-async';
import Error from './components/Error';

const router = createBrowserRouter([
  { path: '/',
    element: <MainLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/categories.json'),
        children: [

          {
            path: '/',
            element: <Products />,
            loader: () => fetch('../Products.json'),
          },
          {
            path: 'category/:category',
            element: <Products />,
            loader: () => fetch('../Products.json'),
          },
        ],
      },
      {
        path: '/product/:id',
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch('../Products.json'),
      },

      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/statictics',
        element: <Statictics></Statictics>,
      },
      {
        path: '/announcementBanner',
        element: <AnnouncementBanner></AnnouncementBanner>,
      },
      {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
