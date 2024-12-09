import { CredentialResponse } from "@react-oauth/google";
import { useSetAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import { toast } from "../../../../shared/components/toast/toast.component";
import { IUser } from "../../../../shared/interfaces/auth.interface";
import { authState } from "../../../../shared/stores/auth/auth.store";

export const useViewLogin = () => {
  const setAuth = useSetAtom(authState);

  const onSuccess = (e: CredentialResponse) => {
    if (e.credential && e.clientId) {
      const decodified: IUser = jwtDecode(e.credential);
      setAuth({
        token: e.credential,
        clientId: e.clientId,
        user: decodified,
      });
      toast({ type: "success", message: "Bienvenido" });
    } else {
      toast({ type: "error", message: "Error al intentar registrarse" });
    }
  };

  const onError = () => {
    toast({ type: "error", message: "Error al enviar la solicitud" });
  };
  return {
    actions: {
      onSuccess,
      onError,
    },
  };
};
