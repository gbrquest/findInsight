import React from 'react'
import styled from 'styled-components';
const Header = () => {
  return (
  <>
  <nav style={{height:'70px',display:'flex',alignItems:'center',padding:'0 36px',overflowX: 'hidden',background:'#050644',color:'white'}} class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">    <Logo src="/fi.png"/></a>
    <button style={{background:'white'}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a style={{color:'white'}} class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a style={{color:'white'}} class="nav-link" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a style={{color:'white'}} class="nav-link" href="/about">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default Header


const Logo = styled.img`
width:50px;
cursor:pointer;
  display:flex;
   
`

