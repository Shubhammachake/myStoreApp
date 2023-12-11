import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

let style = {
  img: {
    width: "80px",
    border: "5px solid teal",
    marginTop: "10px",
    marginBottom: "10px",
  },
  imageContainer: {
    display: "flex",
    gap: "20px",
    border: "1px solid black",
    width: "800px",
    justifyContent: "center",
    margin: "auto",
  },
  btn: {
    width: "150px",
    height: "30px",
    borderRadius: "10px",
    border: "none",
    marginTop: "50px",
    backgroundColor: "teal",
    color: "white",
  },
  parent: {
    display: "flex",
    width: "1250px",
    justifyContent: "space-between",
  },
  b: {
    width: "300px",
    marginTop: "10px",
    marginRight: "100px",
    backgroundColor: "#a5c7ae",
    border: "5px solid teal",
  },
};

export default function Details({ detail, handleReFetch }) {
  let [hover, setHover] = useState(null);
  let navigate = useNavigate();
  const handleGoBack = () => {
    handleReFetch();
    navigate("../Products");
  };
  let handleHome = () => {
    navigate("/Login");
  };
  let handleHover = (image) => {
    setHover(image);
  };

  return (
    <>
      <div style={style.main}>
        <button onClick={handleGoBack} style={style.btn}>
          Go Back
        </button>
        <div className="parent" style={style.parent}>
          <div className="a" style={{ marginTop: "50px" }}>
            <img
              src={detail.thumbnail}
              alt={detail.title}
              style={{ width: "200px", border: "5px solid teal" }}
              onMouseEnter={() => handleHover(detail.thumbnail)}
              onMouseLeave={() => handleHover(detail.thumbnail)}
            />
            <h3>{detail.title}</h3>
            <h3>Description:-</h3>
            <p>{detail.description}</p>
            <h3> Rs:-{detail.price}</h3>
          </div>
          <div className="b" style={style.b}>
            <h3>Preview</h3>
            {hover && (
              <img src={hover} alt="Hover Image" style={{ width: "100%" }} />
            )}
          </div>
        </div>

        <h3>{detail.category}</h3>
        <div style={style.imageContainer}>
          {detail.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={style.img}
              onMouseEnter={() => handleHover(image)}
              onMouseLeave={() => handleHover(image)}
              onClick={() => handleHover(image)}
            />
          ))}
        </div>
        <button onClick={handleHome} style={style.btn}>
          Logout
        </button>
      </div>
    </>
  );
}
