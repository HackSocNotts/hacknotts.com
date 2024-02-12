import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Home, Sponsors, Schedule, About, FAQ } from '@views'
import './index.scss'
import { ColorModeProvider } from "./utils/ColorModeContext.tsx";
import Gallery from '@views/gallery.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/gallery",
    element: <Gallery />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeProvider>
      <RouterProvider router={router} />
    </ColorModeProvider>
  </React.StrictMode>,
)
