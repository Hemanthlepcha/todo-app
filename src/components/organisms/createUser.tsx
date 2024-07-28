import { useUser } from "../../store/entities/user/hook/useUser";

const MyComponent = () => {
  const { setUser, getCurrentUser, createUser } = useUser();

  const handleSignIn = async () => {
    try {
      await setUser({ firstName: "hemanth", password: "1234" });
      const user = getCurrentUser();
      // console.log(user);

      console.log("Signed in user:", user);
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  const handleSignUp = async () => {
    console.log("click");
    try {
      await createUser({
        firstName: "jigme",
        lastName: "tenzin",
        password: "jigme",
      });
      console.log("User created successfully");
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default MyComponent;
