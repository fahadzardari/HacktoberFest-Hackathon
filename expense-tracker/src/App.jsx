import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";


const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return (
    <Routes>
      
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
