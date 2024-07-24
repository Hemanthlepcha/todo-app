import { TodoFragmentFragment } from "../../../graphql/types";
export type todo = NonNullable<TodoFragmentFragment>;
export type todoType = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  UserId: string;
};
