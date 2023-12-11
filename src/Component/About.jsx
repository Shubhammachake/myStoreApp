let style = {
  main: {
    backgroundColor: "#e3dcca",
    marginTop: "-47px",
    height: "1000px",
  },
  h1: {
    color: "#273342",
    display: "flex",
    justifyContent: "center",
    paddingTop: "200px",
    fontFamily: "Brush Script MT",
    fontSize: "70px",
  },
};
function About(props) {
  return (
    <div style={style.main}>
      <h1 style={style.h1}>This is About Page</h1>
    </div>
  );
}
export default About;
