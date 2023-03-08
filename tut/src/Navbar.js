import React from 'react'

const Navbar = () => {
  return (
    <>
        
       <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div class="container">

              
              
                 <a class="navbar-brand logo-text" href="/">Jobsa</a> 

                <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav ms-auto navbar-nav-scroll">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                       
                        
                        
                    </ul>

                    <span class="nav-item " style={{color:'green'}}>
                        <a class="btn-solid-sm" href="/login">Login</a>
                    </span>
                    <span class="nav-item">
                        <a class="btn-solid-sm" href="/register">Sign-up</a>
                    </span>
                </div> 
            </div> 
        </nav>




   
    </>
  )
}

export default Navbar

















 {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/" style={{fontFamily:'Tilt Neon'}}>Developer Hub</a>
  
  <div class="navbar-nav mr-100"style={{paddingleft:'80%'}}>
    <ul class="navbar-nav">
      <li class="nav-item ">
        <a class="nav-link " href="/register">Register<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/login">Login</a>
      </li>
      
     
    </ul>
  </div>
</nav> */}