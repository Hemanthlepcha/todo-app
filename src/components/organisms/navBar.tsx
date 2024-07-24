import AuthPane from "../molucules/authPane";
import Logo from "../atoms/logo/logo";

const NavBar: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#2D2B2F",
      }}
    >
      <Logo
        img="src/assets/logo.png"
        style={{ width: "150px", height: "50px", borderRadius: "8px" }}
      />
      <AuthPane
        style={{
          color: "black",
          padding: "4px",
          borderRadius: "15px",
          marginTop: "6px",
        }}
      />
    </div>
  );
};

export default NavBar;
