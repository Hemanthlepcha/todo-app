import type { SignInQueryVariables, UserResponse } from "../../../graphql/types/user";

export type User= UserResponse;
export type UserSignIn=SignInQueryVariables;
export type CurrentUser = Omit<User,"password"> &{
    id: string
    userId: string
    iat?:number
}