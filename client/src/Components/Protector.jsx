import { useEffect } from "react";
import authStore from "../store/authStore";

const Protector = ({ children }) => {
  const { isAuth, checkAuth } = authStore();

  useEffect(() => checkAuth(), [checkAuth]);
  if (isAuth) {
    return <>{children}</>;
  }
  return (
    <div>
      <h1>You are not authenticated </h1>
    </div>
  );
};

export default Protector;
