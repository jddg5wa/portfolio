import React from 'react';
import BBSLogo from './../assets/imgs/BBS_Logo_Transparent.png';
import './styles/Header.css';


export default function Header ({setPage}) {
  return (
  <header id="site-header">
    <div id="navigation">
      <div id="logotype">
        <img id="site-logo" src={BBSLogo} alt="Brown Box Studio Logo" />
        <h1 id="site-title">Brown Box Studio</h1>
      </div>
      <div id="nav-buttons">
        <h1 onClick={() => setPage("home")}>Home</h1>
        <h1 onClick={() => setPage("about")}>About</h1>
        <h1 onClick={() => setPage("portfolio")}>Portfolio</h1>
        {/* <h1 onClick={() => setPage("blog")}>Blog</h1> */}
        <h1 onClick={() => setPage("journal")}>Journal</h1>
        <h1 onClick={() => setPage("contact")}>Contact</h1>
        {/* <h1 onClick={() => setPage("about")}>Login</h1> */}
      </div>
    </div>
  </header>
  );
}