import AuthPane from "../molucules/authPane";
import Logo from "../atoms/logo/logo";
import AuthBtn from "../atoms/buttons/authBtn";
import useLogout from "../../store/entities/user/hook/useLogout";

interface Props {
  displayAuth: boolean;
  displayWelcome: boolean;
  userName: string;
}

const NavBar: React.FC<Props> = ({ displayAuth, displayWelcome, userName }) => {
  const logout = useLogout();
  const handleLogOut = () => {
    logout();
  };
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
        style={{
          width: "150px",
          height: "50px",
          borderRadius: "8px",
        }}
      />

      {displayAuth && (
        <AuthPane
          style={{
            color: "black",
            padding: "4px",
            borderRadius: "15px",
            marginTop: "6px",
          }}
          display=""
        />
      )}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {displayWelcome && (
          <p
            style={{
              color: "white",
              marginRight: "12px",
              textTransform: "uppercase",
            }}
          >
            Welcome {userName}
          </p>
        )}
        {displayWelcome && (
          <AuthBtn
            label="Log Out"
            style={{
              backgroundColor: "#00C487",
              borderColor: "#00C487",
              borderRadius: "8px",
              height: "36px",
              color: "white",
              marginTop: "7px",
              marginRight: "12px",
              display: "false",
            }}
            onClick={handleLogOut}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
