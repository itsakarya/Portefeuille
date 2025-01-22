import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import ErrorBoundary from './components/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/coming-soon',
    element: <ComingSoon />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '*',
    element: <ComingSoon />,
    errorElement: <ErrorBoundary />,
  },
]);
