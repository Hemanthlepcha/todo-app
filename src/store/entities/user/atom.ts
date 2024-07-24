import { CurrentUser } from "./type";
import { createState } from "../../utils/createState";

const key = (str: string) => `src/store/entities/user/${str}`;

export const initialState = (): CurrentUser => ({
  id: "",
  userId: "",
  firstName: "",
  lastName: "",
});

export const { state: userState } = createState({
  key,
  initialState,
});
