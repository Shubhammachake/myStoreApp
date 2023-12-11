import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Products from "../Component/Products";

let style = {
  main: {
    border: "2px solid red",
  },
  h: {
    marginLeft: "130px",
    marginTop: "100px",
  },
  bdy: {
    width: "400px",
    margin: "auto",
    marginTop: "30px",
  },
  input1: {
    marginLeft: "33px",
    height: "20px",
    borderRadius: "6px",
    border: "1px solid #8284fa",
  },
  input2: {
    marginLeft: "10px",
    height: "20px",
    borderRadius: "6px",
    border: "1px solid #8284fa",
  },
  btn: {
    marginLeft: "120px",
    width: "100px",
    height: "25px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#686afc",
    color: "white",
  },
  sign: {
    marginLeft: "100px",
    textDecoration: "none",
    color: "#6466fa",
  },
  "@media(max-width:768px)": {
    bdy: {
      margin: "auto",
      width: "auto",
      backgroundColor: "black",
    },
    h: {
      color: "red",
    },
  },
};

export default function Login() {
  let [token, setToken] = useState(null);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [temp, setTemp] = useState(false);
  let [log, setlog] = useState(false);

  let handleLogin = () => {
    const loginData = {
      email: email,
      password: password,
    };

    fetch("https://dummy-practice-2.onrender.com/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.token) {
          localStorage.setItem("token", data.token);
          alert("Successful login");
          navigate("../Products", { state: { auth: data.token } });
        } else {
          alert("Login failed. Invalid email or password.");
        }
      })
      .catch((err) => {
        alert("User Not Found");
      });

    setlog(true);
  };

  useEffect(() => {
    let storeToken = localStorage.getItem("token");
    setToken(storeToken);
  }, []);

  console.log("==>", token);
  console.log("email=>", email);
  console.log("pass=>", password);

  return (
    <div>
      {!temp && (
        <>
          <div style={style.bdy}>
            <h3 style={style.h}>Login</h3>
            <label>Email:-</label>
            <input
              type="email"
              name="email"
              style={style.input1}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label>Password:-</label>
            <input
              type="password"
              name="password"
              style={style.input2}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <br />
            <button style={style.btn} onClick={handleLogin}>
              Login
            </button>
            <br />
            <br />
            <Link style={style.sign} to="/Sign">
              Click to SignUp Here
            </Link>
          </div>
        </>
      )}

      {temp && <Products />}
    </div>
  );
}
