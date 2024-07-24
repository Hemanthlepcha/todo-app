import { UserFragmentFragment } from "./index";

export type UserResponse = NonNullable<UserFragmentFragment>;
export type {
  CreateUserMutation,
  CreateUserMutationVariables,
  SignInQueryVariables,
  SignInQuery,
} from ".";
