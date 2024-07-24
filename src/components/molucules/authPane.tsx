import React from "react";
import AuthBtn from "../atoms/buttons/authBtn";

interface Props {
  style?: React.CSSProperties;
}
const authPane: React.FC<Props> = ({ style }) => {
  return (
    <div className="mt-8">
      <AuthBtn
        label="Log In"
        style={style}
        onClick={() => console.log("Directed to LogIn form")}
      />
      <AuthBtn
        label="Sign Up"
        style={{
          background: "#00C0FF",
          color: "white",
          padding: "4px",
          marginLeft: "1rem",
          marginRight: "1rem",
          borderRadius: "15px",
          // borderColor:"white"
        }}
        onClick={() => console.log("Directed to Sign Up form")}
      />
    </div>
  );
};
export default authPane;
