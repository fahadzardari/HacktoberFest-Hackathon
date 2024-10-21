import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";


const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
