import React from "react";
import "../navbars/Navbar.css";

const SideNav = () => {
  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = 0;
  }

  return (
    <>
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      {/* Use any element to open the sidenav */}
      <span onclick={openNav}>Open</span>

      {/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page */}
      {/* <div id="main">Come here</div>
      <div id="main">Come here</div> */}
    </>
  );
};

export default SideNav;
