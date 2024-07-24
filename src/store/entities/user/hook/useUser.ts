import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import {
  useSignInQuery,
  useCreateUserMutation,
  CreateUserMutationVariables,
} from "../../../../graphql/types";
import { CurrentUser, UserSignIn } from "../type";
import { decodeToken } from "react-jwt";

export const useUser = () => {
  const { upsert } = useUpsert();

  // Initialize hooks with base options
  const signInUserQuery = useSignInQuery({ skip: true });
  const [createUserMutation] = useCreateUserMutation();

  const getCurrentUser = () => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      try {
        const user: CurrentUser | null = decodeToken<CurrentUser>(storedToken);
        return user;
      } catch (decodeError) {
        throw new Error(`Error decoding token: ${decodeError}`);
      }
    }

    return null;
  };

  const setUser = useRecoilCallback(
    () => async (input: Partial<UserSignIn>) => {
      try {
        const res = await signInUserQuery.refetch({
          ...input,
        });

        const userToken: string | null = res.data?.signIn ?? null;

        if (userToken) {
          localStorage.setItem("token", userToken);

          try {
            const user = getCurrentUser();
            if (user) {
              upsert(user);
            }
          } catch (decodeError) {
            throw new Error(`Error decoding token: ${decodeError}`);
          }
        } else {
          throw new Error(`Error during sign-in: ${res.errors}`);
        }
      } catch (fetchError) {
        throw new Error(`Error during sign-in fetch: ${fetchError}`);
      }
    },
    [upsert, signInUserQuery]
  );

  const createUser = useRecoilCallback(
    () => async (input: CreateUserMutationVariables) => {
      try {
        const res = await createUserMutation({
          variables: input,
        });

        if (res.errors) {
          throw new Error(`Error creating user: ${res.errors}`);
        }
      } catch (error) {
        throw new Error(`Error during user creation: ${error}`);
      }
    },
    [createUserMutation]
  );

  return {
    setUser,
    getCurrentUser,
    createUser,
  };
};
