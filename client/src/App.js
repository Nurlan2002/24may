import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import {ROUTES}  from './Routes/routes'
const router=createBrowserRouter(ROUTES)
function App() {
  return (
<RouterProvider router={router}/>
  );
}

export default App;
