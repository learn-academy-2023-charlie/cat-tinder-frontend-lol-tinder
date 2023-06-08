import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const Footer = () => {
  return(
    <>
      <Navbar
        className="my-2"
        color="info"
        fixed="bottom"
      >
        <NavbarBrand href="/">
          &copy; Kyle && Bea | 2023
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Footer