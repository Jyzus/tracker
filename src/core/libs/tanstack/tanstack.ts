import { FC, PropsWithChildren } from "react";
import { QueryClient } from "@tanstack/query-core";
import { queryClientAtom } from "jotai-tanstack-query";
import { useHydrateAtoms } from "jotai/utils";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export const HydrateAtoms: FC<PropsWithChildren> = ({ children }) => {
  useHydrateAtoms([[queryClientAtom, queryClient]]);
  return children;
};
