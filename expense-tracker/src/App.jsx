import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Category from "./pages/Category";
import ProtectedRoute from "./components/ProtectedRoute";
import AddBudget from "./pages/AddBudget";
import AddIncome from "./pages/AddIncome";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
      <Route path="/category" element={<Category />} />
      <Route path="/add-budget" element={<AddBudget />} />
      <Route path="/add-income" element={<AddIncome />} />
      <Route path="*" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
