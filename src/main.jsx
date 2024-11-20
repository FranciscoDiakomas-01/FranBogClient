import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/main/index.jsx';
import Posts from './pages/posts/index.jsx';
import About from './pages/about/index.jsx';
import PostDetails from './pages/postDetails/index.jsx';
import Login from './pages/login/index.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/post",
        element: <Posts />,
      },
      {
        path: "/about",
        element: <About />,
      },
      
      {
        path: "/postdetails",
        element: <PostDetails />,
      },
    ],
  },
  {
    path: "/login",
    element : <Login/>
    
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
);
