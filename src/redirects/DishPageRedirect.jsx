import { Navigate, Outlet, useParams } from "react-router-dom";

export default function DishPageRedirect() {
  const { dishId } = useParams();

  if (!dishId) return <Navigate to="/" replace />;

  return <Outlet />;
}
