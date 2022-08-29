import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Layout from "../../containers/Layout/Layout";

export const ProtectedLayout = (props) => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Layout outlet= {outlet} pages={props.pages}/>
    </div>
  );
};
