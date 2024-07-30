import React, { useState } from "react";
import ReactModal from "react-modal";
import AuthBtn from "../atoms/buttons/authBtn";
import Input from "../atoms/inputs/input";
import { useUser } from "../../store/entities/user/hook/useUser";
import { useNavigate } from "react-router-dom";

// Props type definition
interface Props {
  style?: React.CSSProperties;
  display: string;
}

// Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    WebkitBoxShadow: "10px 10px 52px 0px rgba(0,0,0,0.75)",
    MozBoxShadow: "10px 10px 52px 0px rgba(0,0,0,0.75)",
    boxShadow: "10px 10px 52px 0px rgba(0,0,0,0.75)",
  },
};

const AuthPane: React.FC<Props> = () => {
  const { setUser, getCurrentUser, createUser } = useUser();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home");
    window.location.reload();
  }
  function singUpRoute() {
    navigate("/");
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openSignUpModal = () => setSignUpModalOpen(true);
  const closeSignUpModal = () => setSignUpModalOpen(false);

  const handleLogIn = async () => {
    try {
      await setUser({ firstName, password });
      const user = getCurrentUser();
      if (user) {
        handleClick();
      }

      // console.log(user);

      console.log("Signed in user:", user);
    } catch (error) {
      window.alert("Sign in error:");
      console.error("Sign in error:", error);
    }
  };
  const handleSignUp = async () => {
    console.log("click");
    try {
      await createUser({
        firstName,
        lastName,
        password,
      });

      window.alert("Sign Up Sucess");
      singUpRoute();
      console.log("User created successfully");
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  return (
    <div style={{ marginTop: "5px" }}>
      <div
        style={{
          marginLeft: "54rem",
        }}
      >
        <AuthBtn
          label="Log In"
          style={{
            padding: "8px",
            borderRadius: "15px",
            height: "37px",
            color: "white",
          }}
          onClick={openLoginModal}
        />
        <AuthBtn
          label="Sign Up"
          style={{
            background: "#00C0FF",
            color: "white",
            padding: "8px",
            marginLeft: "1rem",
            marginRight: "1rem",
            borderRadius: "15px",
            height: "37px",
          }}
          onClick={openSignUpModal}
        />
      </div>

      {/* Log In Modal */}
      <ReactModal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        style={customStyles}
        contentLabel="Log In"
        shouldCloseOnOverlayClick={false}
      >
        <button
          style={{ marginLeft: "16rem", border: "none", cursor: "pointer" }}
          onClick={closeLoginModal}
        >
          X
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Log In</h2>

          <div style={{ padding: "12px" }}>
            <label className="bg-slate-600">First Name:</label>
            <Input value={firstName} onChange={handleFirstName} />
          </div>
          <div style={{ padding: "12px" }}>
            <label>Password: </label>
            <Input type="password" onChange={handlePassword} value={password} />
          </div>
          <AuthBtn
            style={{
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "4px",
              cursor: "pointer",
              borderColor: "green",
            }}
            label="Log In"
            onClick={handleLogIn}
          />
        </div>

        {/* <button onClick={handleLogIn}>LogIn</button> */}
        {/* Log In form goes here */}
      </ReactModal>

      {/* Sign Up Modal */}
      <ReactModal
        isOpen={isSignUpModalOpen}
        onRequestClose={closeSignUpModal}
        style={customStyles}
        contentLabel="Sign Up"
        shouldCloseOnOverlayClick={false}
      >
        {" "}
        <button
          style={{
            marginLeft: "16rem",
            // backgroundColor: "red",
            borderRadius: "100%",
            color: "black",
            border: "none",
            cursor: "pointer",
          }}
          onClick={closeSignUpModal}
        >
          X
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Sign Up</h2>
          <div className="bg-black">
            <div style={{ padding: "12px" }}>
              <label className="bg-slate-600">First Name:</label>
              <Input value={firstName} onChange={handleFirstName} />
            </div>
            <div style={{ padding: "12px" }}>
              <label className="bg-slate-600">Last Name:</label>
              <Input value={lastName} onChange={handleLastName} />
            </div>
            <div style={{ padding: "12px" }}>
              <label>Password: </label>
              <Input
                type="password"
                onChange={handlePassword}
                value={password}
              />
            </div>
          </div>
          <AuthBtn
            style={{
              backgroundColor: "#00C0FF",
              borderRadius: "4px",
              padding: "4px",
              color: "white",
              cursor: "pointer",
            }}
            label="Sign Up"
            onClick={handleSignUp}
          />
        </div>
        {/* Sign Up form goes here */}
      </ReactModal>
    </div>
  );
};

export default AuthPane;
