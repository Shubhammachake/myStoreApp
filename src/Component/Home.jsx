let style = {
  main: {
    backgroundColor: "#e3dcca",
    marginTop: "-47px",
    height: "580px",
  },
  h1: {
    color: "#273342",
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    fontFamily: "Brush Script MT",
    fontSize: "70px",
  },
};
function Home() {
  let storeToken = localStorage.getItem("token");
  console.log("home", storeToken);
  return (
    <div style={style.main}>
      <h1 style={style.h1}>Well Come To My Store</h1>
    </div>
  );
}
export default Home;
