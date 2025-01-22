import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { router } from './routes';

function App() {
  return (
    <ThemeProvider>
      <div className="content-wrapper hardware-accelerated theme-transition min-h-screen bg-gray-50 dark:bg-gray-900">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;