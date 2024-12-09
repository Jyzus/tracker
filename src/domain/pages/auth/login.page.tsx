import { GoogleLogin } from "@react-oauth/google";
import { useViewLogin } from "./hooks/useViewLogin";

const Login = () => {
  const { actions } = useViewLogin();
  return (
    <div>
      <GoogleLogin onSuccess={actions.onSuccess} onError={actions.onError} />
    </div>
  );
};

export default Login;
