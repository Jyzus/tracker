import { atomWithStorage } from "jotai/utils";
import { IAuth } from "../../interfaces/auth.interface";

export const authState = atomWithStorage<IAuth | null>("auth", null);
