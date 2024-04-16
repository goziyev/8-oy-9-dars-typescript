import { NavLink } from "react-router-dom";

function index() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <p>Error Page</p>
      <NavLink
        to="/"
        style={{
          background: "blue",
          width: "250px",
          margin: "50px auto",
          padding: "15px",
          color: "white",
          textDecoration: "none",
        }}
      >
        Return To Home
      </NavLink>
    </div>
  );
}

export default index;
