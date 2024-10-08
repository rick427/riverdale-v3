import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme as ThemeProvider } from '@radix-ui/themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//@: Styles
import '@radix-ui/themes/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/main.scss";

//@: Pages
import Home from './pages/Home';
import About from "./pages/About";
import Blogs from './pages/Blogs';
import Blog from "./pages/Blog";
import Contact from './pages/Contact';
import Property from './pages/Property';
import NotFound from './pages/NotFound';
import Properties from './pages/Properties';
import ContactFaqs from './pages/ContactFaqs';

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Home/>,
    errorElement: <NotFound/>
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/blogs",
    element: <Blogs/>,
  },
  {
    path: "/blog/:slug",
    element: <Blog/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/contact/faqs",
    element: <ContactFaqs/>,
  },
  {
    path: "/property",
    children: [
      {
        index: true,
        element: <Properties/>,
      },
      {
        path: ":slug",
        element: <Property/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
