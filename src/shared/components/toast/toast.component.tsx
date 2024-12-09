import { toast as toastLib } from "react-hot-toast";
import { IToastTypes } from "./toast.interface";

interface Props {
  type: IToastTypes;
  message: string;
}

export const toast = ({ type, message }: Props) => {
  return toastLib[type](message, {
    position: "bottom-right",
  });
};
