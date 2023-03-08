import React from 'react'

const Home = () => {
  return (
    <>
    
  <div className="App">
      
   
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
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#details">Details</a>
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
      
        <header id="header" class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-xl-5">
                        <div class="text-container">
                            <h1 class="h1-large">Find right developers for your products</h1>
                            <p class="p-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim, neque ut ultrices sollicitudin</p>
                            <a class="btn-solid-lg" href="#services">Offered services</a>
                        </div>
                    </div> 
                    <div class="col-lg-6 col-xl-7">
                        <div class="image-container">
                            <img class="img-fluid" src="assets/images/header-image.png" alt="alternative" />
                        </div> 
                    </div> 
                </div> 
            </div> 
        </header> 
      
        <div id="services" class="cards-1 bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Explore our services</h2>
                    </div> 
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        
                      
                        <div class="card">
                            <div class="card-icon">
                                <span class="fas fa-headphones-alt"></span>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Analyse our developers</h5>
                                <p>Et blandit nisl libero at arcu. Donec ac lectus sed tellus mollis viverra. Nullam pharetra ante at nunc elementum</p>
                                <a class="read-more no-line" href="/login">Learn more <span class="fas fa-long-arrow-alt-right"></span></a>
                            </div>
                        </div>
                    
                        <div class="card">
                            <div class="card-icon red">
                                <span class="far fa-clipboard"></span>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Evaluate developers</h5>
                                <p>Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia, sed ultrices velit scelerisque. Nunc placerat justo sem</p>
                                <a class="read-more no-line" href="/login">Learn more <span class="fas fa-long-arrow-alt-right"></span></a>
                            </div>
                        </div>
                      
                        <div class="card">
                            <div class="card-icon green">
                                <span class="far fa-comments"></span>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Find the  Perfect Developers Easily</h5>
                                <p>Ety suscipit metus sollicitudin euqu isq imperdiet nibh nec magna tincidunt, nec pala vehicula neque sodales verum</p>
                                <a class="read-more no-line" href="/login">Learn more <span class="fas fa-long-arrow-alt-right"></span></a>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div> 
        <div id="details" class="basic-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-xl-7">
                        <div class="image-container">
                            <img class="img-fluid" src="assets/images/details-1.png" alt="alternative" />
                        </div> 
                    </div> 
                    <div class="col-lg-6 col-xl-5">
                        <div class="text-container">
                            <div class="section-title">WHAT WE DO</div>
                            <h2>The right developer can boost your product VALUE</h2>
                            <p>Etiam tempus condimentum congue. In sit amet nisi eget massa condimentum lobortis eget ac eros. In hac habitasse platea dictumst. Aenean molestie mauris eget sapien sagittis, a bibendum magna tincidunt</p>
                            <a class="btn-solid-reg" href="/register">SIGN-UP</a>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div>
       


       
      
       


       


       


      
        <div class="slider-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h4>Trusted by over <span class="blue">5000</span> customers worldwide</h4>
                        <hr class="section-divider" />

                     
                        <div class="slider-container">
                            <div class="swiper-container image-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="assets/images/customer-logo-1.png" alt="alternative" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="assets/images/customer-logo-2.png" alt="alternative" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="assets/images/customer-logo-3.png" alt="alternative" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="assets/images/customer-logo-4.png" alt="alternative" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="assets/images/customer-logo-5.png" alt="alternative" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src="assets/images/customer-logo-6.png" alt="alternative" />
                                    </div>
                                </div>
                            </div> 
                        </div> 
                       

                    </div> 
                </div>
            </div> 
        </div> 
       


     
        <div class="basic-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-container">
                            <h2>Find the right developer for your product</h2>
                            <p class="p-large">Eu convallis arcu ultrices in. Mauris ornare libero et pharetra hendrerit. Curabitur elementum lectus quis vioc tellus</p>
                            <a class="btn-solid-lg" href="/register">SIGN-UP</a>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
     
       
        <div class="footer bg-gray">
            <img class="decoration-circles" src="assets/images/decoration-circles.png" alt="alternative" />
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h4>If you want to find out  the right developers for your product development then follow us</h4>
                        <div class="social-container">
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-pinterest-p fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-instagram fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-youtube fa-stack-1x"></i>
                                </a>
                            </span>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
        <div class="copyright bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <ul class="list-unstyled li-space-lg p-small">
                            <li><a href="#">Article Details</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div> 
                    <div class="col-lg-3 col-md-12 col-sm-12">
                        <p class="p-small statement">Copyright © <a href="#">Jobsa</a></p>
                    </div> 

                    <div class="col-lg-3 col-md-12 col-sm-12">
                        <p class="p-small statement">Distributed by <a href="https://therichpost.com/" target="_blank">Jobsa</a></p>
                    </div> 
                </div> 
            </div> 
        </div>
       
        <button id="myBtn">
            <img src="assets/images/up-arrow.png" alt="alternative" />
        </button>
      
    </div>

    </>
  )
}

export default Home