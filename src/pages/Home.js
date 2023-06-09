import React from 'react'
import another from '../assets/another.png'
const home = () => {
  const homeStyle = {
    backgroundImage: `url(${another})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    padding: "0",
    marginBottom: "50px"
  };
  return (
    <div style={homeStyle} data-testid="home-div">
      <h1 className='homepage-title'>Welcome League of Legends Tinder</h1>
    </div>
  );
}

export default home