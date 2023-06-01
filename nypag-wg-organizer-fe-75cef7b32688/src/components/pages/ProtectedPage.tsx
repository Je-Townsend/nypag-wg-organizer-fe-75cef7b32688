import Navbar from "../atoms/NavBar/NavBar";
import { Navigate, Outlet } from "react-router-dom";
interface ProtectedPageProps {
  isLoggedIn: boolean;
}
export const ProtectedPage = ({ isLoggedIn }: ProtectedPageProps) => {
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isLoggedIn ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
