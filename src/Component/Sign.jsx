import { useState } from "react";
import { useNavigate } from "react-router-dom";
let style = {
  main: {
    border: "2px solid red",
  },
  h: {
    marginLeft: "620px",
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
  input3: {
    marginLeft: "18px",
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
};

export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  let navigate = useNavigate();
  const handleSignUp = () => {
    const signupData = {
      email: email,
      password: password,
      address: address,
    };

    fetch("https://dummy-practice-2.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "user already exist") {
          alert(data.message);
          navigate("../Login");
        } else {
          alert("Signup Successfully");
          console.log("credentials:", data);
          navigate("../Products", { state: { auth: data.message } });
        }
      })
      .catch((err) => {
        console.log("Err=>", err);
      });
  };

  return (
    <div>
      <h3 style={style.h}>SignUp</h3>
      <div style={style.bdy}>
        <label>Email:-</label>
        <input
          type="email"
          style={style.input1}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Password:-</label>
        <input
          type="password"
          style={style.input2}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label>Address:-</label>
        <input
          type="text"
          style={style.input3}
          name="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <br />
        <br />
        <button style={style.btn} onClick={handleSignUp}>
          SignUp
        </button>
      </div>
    </div>
  );
}
