import { useRecoilCallback } from "recoil";
import { CurrentUser } from "../type";
import { userState } from "../atom";

export const useUpsert = () => {
  const upsert = useRecoilCallback(
    ({ set }) =>
      (input: CurrentUser) => {
        if (input && input.id != null) {
          set(userState(input.id), input);
        } else {
          console.warn("Invalid input or Unrecognised");
        }
      },
    []
  );
  return {upsert};
};
