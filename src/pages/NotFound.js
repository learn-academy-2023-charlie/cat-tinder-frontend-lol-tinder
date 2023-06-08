import notfoundbg from "../assets/notfoundbg.png";
const notFound = () => {
  const notFoundStyle = {
    backgroundImage: `url(${notfoundbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    padding: '0',
  };
  return (
    <div style={notFoundStyle}>
      <span className="notfound-style">There's nothing to see here</span>
    </div>
  );
}

export default notFound