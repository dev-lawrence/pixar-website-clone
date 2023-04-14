import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Feature from './pages/Feature';
import Careers from './pages/Careers';
import Trailer from './pages/Trailer';
import WinLose from './pages/WinLose';

// styles
import './sass/main.scss';

// layouts
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="feature" element={<Feature />} />
      <Route path="careers-at-pixar" element={<Careers />} />
      <Route path="trailer" element={<Trailer />} />
      <Route path="winlose" element={<WinLose />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
