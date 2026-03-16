import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Routes from './routes/Routes.tsx'
import { Context } from './context/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context>
      <RouterProvider router={Routes}></RouterProvider>
    </Context>
  </StrictMode>,
)
