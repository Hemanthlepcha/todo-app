import {  TodoType } from "./index";

export type todoResponse = NonNullable<TodoType>;
export type {
  CreateTodoMutation,
  CreateTodoMutationVariables,
  UpdateTodoMutationVariables,
  UpdateTodoMutation,
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
  RootQueryTypeGetTodoArgs,
  GetTodosQueryVariables,
  GetTodosQuery,
} from ".";
