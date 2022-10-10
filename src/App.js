import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home.jsx'
import Questiones from './Components/Questions/Questiones';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/quiz',
          element: <Questiones></Questiones>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
