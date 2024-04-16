import { useDispatch } from "react-redux";
import { setToken } from "../../store/userToken";
import { setRole } from "../../store/userToken";
import { useNavigate } from "react-router-dom";

function index() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
    LoginPage
    <br />
    <br />
    <br />
    <button
      style={{
        width: "400px",
        backgroundColor: "blue",
        color: "white",
        padding: "15px",
        border: "none",
      }}
      onClick={() => {
        const token = "dskadasdkfhsdbhgjldshbkchasdbhksadbhsadjas";
        const role = "teacher";
        dispatch(setToken(token));
        dispatch(setRole(role));
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        navigate("/");
      }}
    >
      Save LocalStorage Teacher
    </button>
    <button
      style={{
        width: "400px",
        backgroundColor: "blue",
        color: "white",
        padding: "15px",
        border: "none",
      }}
      onClick={() => {
        const token = "dskadasdkfhsdbhgjldshbkchasdbhksadbhsadjas";
        const role = "student";
        dispatch(setToken(token));
        dispatch(setRole(role));
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        navigate("/");
      }}
    >
      Save LocalStorage Student
    </button>
    <button
      style={{
        width: "400px",
        backgroundColor: "blue",
        color: "white",
        padding: "15px",
        border: "none",
      }}
      onClick={() => {
        const token = "dskadasdkfhsdbhgjldshbkchasdbhksadbhsadjas";
        const role = "guest";
        dispatch(setToken(token));
        dispatch(setRole(role));
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        navigate("/");
      }}
    >
      Save LocalStorage  Guest
    </button>
  </div>
  );
}

export default index;
