import Details from "./Details";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

let style = {
  main: {
    border: "2px solid black",
    display: "grid",
    gridTemplateColumns: "repeat(5,200px)",
    gap: "30px",
    justifyContent: "center",
  },
  child: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a5c7ae",

    borderRadius: "20px",
    marginTop: "30px",
  },
  img: {
    width: "100%",
  },
};

export default function Products(props) {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState(null); // Initialize as null
  const [show, setShow] = useState(false);
  const [reFetch, setRefetch] = useState(false);

  let navigate = useNavigate();

  const location = useLocation();
  const receivedState = location.state;
  const signupState = location.state;
  const [mytoken, setMytoken] = useState();
  const [mysignupToken, setsignUp] = useState();

  useEffect(() => {
    setMytoken(receivedState);
    setsignUp(signupState);
  }, []);
  console.log("my recived token", mytoken);
  console.log("my signup token", signupState);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setShow(true);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [reFetch]);

  let handleFetch = () => {
    setRefetch(!reFetch);
  };
  console.log(reFetch);
  let handleClick = (productId) => {
    setShow(false); // Hide the products temporarily while fetching details

    if (mytoken && mysignupToken) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          setDetail(data);
        })
        .catch((err) => {
          console.log("error", err);
        })
        .finally(() => {
          setShow(false); // Show the products again after fetching details
        });
    } else {
      navigate("/Login");
    }
  };

  return (
    <div style={style.main}>
      {data &&
        show &&
        data.map((item, id) => (
          <div
            key={id}
            style={style.child}
            onClick={() => handleClick(item.id)}
          >
            <img src={item.thumbnail} alt={item.title} style={style.img} />
            <h3 style={{ color: "black", textAlign: "center" }}>
              {item.title}
            </h3>
            <h4 style={{ color: "black" }}>Rs:- {item.price} /-</h4>
          </div>
        ))}
      {/* Conditional rendering of Details component */}
      {detail && !show && (
        <Details detail={detail} handleReFetch={handleFetch} />
      )}
    </div>
  );
}
